const mysql = require('./mysql');
const Types = { EMAIL: 'Email', CELL_PHONE: 'Cell Phone' };

async function getAll(){
    console.log("Called getAll")
    return await mysql.query(`SELECT * FROM ContactMethods`);
}

async function get(id){
    const rows = await mysql.query(`SELECT * FROM ContactMethods WHERE id=?`, [id]);
    if(!rows.length) throw { status: 404, message: "User not found" }
    return rows[0];
}

async function exists(email){
    const rows = await mysql.query(`SELECT * FROM ContactMethods WHERE Value=?`, [email]);
    return rows.length;
}

async function getTypes(){
    return await mysql.query(`SELECT id, Name FROM Types WHERE Type_id = 4`);
}

const search = async q => await mysql.query(`SELECT id, Value FROM ContactMethods WHERE 
    Value LIKE ? ; `, [`%${q}%`])

async function add(Type, Value, IsPrimary = 0, CanSpam = 1, User_id){
    const sql = 'INSERT INTO `ContactMethods` (`created_at`, `Type`, `Value`, `IsPrimary`, `CanSpam`, `User_id`) VALUES ? ;'; 
    const params = [[ new Date(), Type, Value, IsPrimary, CanSpam, User_id ]];
    return await mysql.query(sql, [params]);
}

async function update(id, Type, Value, IsPrimary, CanSpam, User_id){
    const sql = 'UPDATE `ContactMethods` SET ? WHERE `id` = ?; '; 
    const params = { Type, Value, IsPrimary, CanSpam, User_id };
    return await mysql.query(sql, [params, id]);
}

async function remove(id){
    const sql = 'DELETE FROM `ContactMethods` WHERE `ContactMethods`.`id` = ?; ';
    return await mysql.query(sql, [id]);
}

module.exports = { Types, getAll, get, exists, getTypes, search, add, update, remove }