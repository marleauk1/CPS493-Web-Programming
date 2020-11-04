const data = [{ name: 'Moshe', age: 43}, { name: 'Joe', age: 78 }]

function getAll(){
    throw { status: 501, message: "This is a fake error" }
    // await Promise.resolve()
    console.log("Called getAll")
    return data;
}

async function add(name, age){
    data.push({ name, age });
}

module.exports = { getAll, add, search: async q => data.filter(x => x.name == q) }