const db = require('../config/users.js')

const _createNewUser = (username,password) => {
    return db('hashpwd').insert({username,password},["id", "username", "password"]);
}

const _createNewUserTable = (username) => {
    return db('users').insert({username});
}

const _retrieveExistingUser = (username) => {
    return db('hashpwd').select('username','password').where({username})
}

const _getAllUsers = () => {
    return db('users').select('*').orderBy('username')
}

const _getUser = (id) => {
    return db('users').select('*').where({id}).orderBy('username')
}

const _updateUser = (id,first_name,last_name) => {
    return db('users').update({first_name,last_name},["id", "first_name", "last_name"]).where({id})
}

module.exports = {
    _createNewUser,
    _createNewUserTable,
    _retrieveExistingUser,
    _getAllUsers,
    _getUser,
    _updateUser
}