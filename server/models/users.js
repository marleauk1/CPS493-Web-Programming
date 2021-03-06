const bcrypt = require('bcrypt');
const mysql = require('./mysql');
const cm = require('./ContactMethods');

const SALT_ROUNDS = process.env.SALT_ROUNDS || 8;
const Types = { ADMIN: 5, USER: 6 };

async function getAll(){
    // throw { status: 501, message: "This is a fake error" }
    // await Promise.resolve()
    console.log("Called getAll")
    return await mysql.query(`SELECT * FROM Users`);
}

async function get(id){
    const sql = `SELECT
        *,
        (SELECT Value FROM ContactMethods WHERE User_id = Users.id AND Type='${cm.Types.EMAIL}' AND IsPrimary = true) as PrimaryEmail
        FROM Users WHERE id=?`;
    const rows = await mysql.query(sql, [id]);
    if(!rows.length) throw { status: 404, message: "User not found" }
    return rows[0];
}

async function getTypes(){
    return await mysql.query(`SELECT id, Name FROM Types WHERE Type_id = 2`);
}

const search = async q => await mysql.query(`SELECT id, FirstName, LastName FROM Users WHERE 
    LastName LIKE ? OR FirstName LIKE ?; `, [`%${q}%`, `%${q}%`])

async function add(FirstName, LastName, DOB, Password, User_Type){
    const sql = 'INSERT INTO `Users` (`created_at`, `FirstName`, `LastName`, `DOB`, `Password`, `User_Type`) VALUES ? ;'; 
    const params = [[ new Date(), FirstName, LastName, new Date(DOB), Password, User_Type ]];
    return await mysql.query(sql, [params]);
}

async function update(id, FirstName, LastName, DOB, Password, User_Type){
    const sql = 'UPDATE `Users` SET ? WHERE `id` = ?; '; 
    const params = { FirstName, LastName, DOB: new Date(DOB), Password, User_Type };
    return await mysql.query(sql, [params, id]);
}

async function remove(id){
    const sql = 'DELETE FROM `Users` WHERE `Users`.`id` = ?; ';
    return await mysql.query(sql, [id]);
}

async function register(FirstName, LastName, DOB, Password, User_Type, email) {
    if(await cm.exists(email)){
        throw { status: 409, message: "An account already exists with this email. Please go to log in." }
    }
    const hash = await bcrypt.hash(Password, SALT_ROUNDS);
    const res = await add(FirstName, LastName, DOB, Password, User_Type);
    const emailRes = await cm.add(cm.Types.EMAIL, email, true, true, res.insertId);
    const user = await get(res.insertId);
    return user;
}

async function login(email, password){
    const sql = `SELECT *
        FROM Users U Join ContactMethods CM ON U.id=CM.User_id WHERE CM.Value=?`;
    const rows = await mysql.query(sql, [email]);
    if(!rows.length) throw { status: 404, message: "This email address is not registered with us." }
    if(! await bcrypt.compare(password, rows[0].Password)) throw { status: 403, message: "Wrong password." }
    return get(rows[0].User_id);
}

module.exports = { Types, getAll, get, getTypes, search, add, update, remove, register, login }