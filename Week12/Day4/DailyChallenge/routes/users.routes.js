const express = require('express')
const {
    createNewUser,
    retrieveExistingUser,
    getAllUsers,
    getUser,
    updateUser
} = require('../controllers/users.controllers.js')

const users_router = express.Router();

users_router.post('/register',createNewUser)
users_router.post('/login',retrieveExistingUser)
users_router.get('/users',getAllUsers)
users_router.get('/users/:id',getUser)
users_router.put('/users/:id',updateUser)

module.exports = users_router

