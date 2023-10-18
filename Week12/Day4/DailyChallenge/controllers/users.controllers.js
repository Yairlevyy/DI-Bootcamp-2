const {
    _createNewUser,
    _createNewUserTable,
    _retrieveExistingUser,
    _getAllUsers,
    _getUser,
    _updateUser
} = require('../models/users.models.js')

const bcrypt = require('bcryptjs');

const createNewUser = async (req,res) => {
    const {username,password} = req.body;
    const hash_password = await hashPassword(password)
    try { 
        const data = await _createNewUser(username,hash_password);
        const data_bis = await _createNewUserTable(username);
        res.send('The account was successfuly created !')
    } catch (err) {
        console.log(err)
        res.status(404).json({msg:'Error occured, please try again'})
    }
}

async function hashPassword(plainTextPassword) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(plainTextPassword, saltRounds);
  return hashedPassword;
}

const retrieveExistingUser = async (req,res) => {
    const {username,password} = req.body;
    try { 
        const data = await _retrieveExistingUser(username);
        const isMatch = await comparePasswords(password,data[0].password)
            if (isMatch) {
                res.send('Successfuly login !')
            } else {
                res.send('Password wrong !')
            }
        
    } catch (err) {
        console.log(err)
        res.status(404).json({msg:'Error occured, please try again'})
    }
}

async function comparePasswords(plainTextPassword, hashedPassword) {
  const isMatch = await bcrypt.compare(plainTextPassword, hashedPassword);
  return isMatch;
}

const getAllUsers = async (req,res) => {
    try { 
        const data = await _getAllUsers();
        res.json(data)
    } catch (err) {
        console.log(err)
        res.status(404).json({msg:'Error occured, please try again'})
    }
}

const getUser = async (req,res) => {
    const id = Number(req.params.id)
    try { 
        const data = await _getUser(id);
        res.json(data)
    } catch (err) {
        console.log(err)
        res.status(404).json({msg:'Error occured, please try again'})
    }
}

const updateUser = async (req,res) => {
    const id = Number(req.params.id)
    const {first_name,last_name} = req.body
    try { 
        const data = await _updateUser(id,first_name,last_name);
        res.json(data)
    } catch (err) {
        console.log(err)
        res.status(404).json({msg:'Error occured, please try again'})
    }
}


module.exports = {
    createNewUser,
    retrieveExistingUser,
    getAllUsers,
    getUser,
    updateUser
}