const mysql = require('./mysql');

const data = [{ name: 'Moshe', age: 43}, { name: 'Joe', age: 78 }]

async function getAll(){
    // throw { status: 501, message: "This is a fake error" }
    // await Promise.resolve()
    console.log("Called getAll")
    return await mysql.query(`SELECT * FROM Users`);
}

async function get(id){
    return await mysql.query(`SELECT * FROM Users WHERE id=?`, [id]);
}

async function getTypes(){
    return await mysql.query(`SELECT id, Name FROM Types WHERE Type_id = 2`);
}

const search = async q => await mysql.query(`SELECT id, FirstName, LastName FROM Users WHERE 
    LastName LIKE ? OR FirstName LIKE ?; `, [`%${q}%`, `%${q}%`])

async function add(name, age){
    data.push({ name, age });
}

module.exports = { getAll, get, getTypes, search, add }