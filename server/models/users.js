const mysql = require('./mysql');
const Types = { ADMIN: 5, USER: 6 };

const data = [{ name: 'Moshe', age: 43}, { name: 'Joe', age: 78 }]

async function getAll(){
    // throw { status: 501, message: "This is a fake error" }
    // await Promise.resolve()
    console.log("Called getAll")
    return await mysql.query(`SELECT * FROM Users`);
}

async function get(id){
    const rows = await mysql.query(`SELECT * FROM Users WHERE id=?`, [id]);
    if(!rows.length) throw { status: 404, message: "User not found" }
    return rows;
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
    const params = { created_at: new Date(), FirstName, LastName, DOB: new Date(DOB), Password, User_Type };
    return await mysql.query(sql, [params, id]);
}

async function remove(id){
    const sql = 'DELETE FROM `Users` WHERE `Users`.`id` = ?; ';
    return await mysql.query(sql, [id]);
}

module.exports = { Types, getAll, get, getTypes, search, add, update, remove }