const db = require('../data/db-config.js');

module.exports = {
    getUsers,
    addUser,
    findById,
    findBy
}

function getUsers(){
    return db('users')
}

function addUser(user){
    return db('users')
    .insert(user)
}

function findById(id){
    return db('users')
    .where({id})
}

function findBy(username){
   return db('users')
    .where({ username })
}
