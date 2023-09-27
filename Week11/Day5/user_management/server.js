const express = require('express')
const app = express()
const fs = require('fs')
const bcrypt = require('bcryptjs')

app.listen(5000,()=>{
    console.log('server is running on port 5000')
})

app.use(express.static('public'));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/register',(req,res)=>{
    res.sendFile(__dirname + '/public/register.html')
})

app.get('/login',(req,res)=>{
    res.sendFile(__dirname + '/public/login.html')
})

app.post('/register',async (req,res)=>{
    const {first_name,last_name,email,username,password} = req.body;
    const dataRaw = fs.readFileSync('users.json','utf-8')
    const data = JSON.parse(dataRaw)
    const users = data.users
    const usernameExist = users.find(item=>item.username === username)
    const emailExist = users.find(item=>item.email === email)

    if (usernameExist) {
        return res.status(409).send('Username already exists')
    } else if (emailExist) {
        return res.status(409).send('Email already exists')
    }

    const id = users.length + 1;
    const crypted_password = await hashPassword(password);
    const new_user = {id,first_name,last_name,email,username,crypted_password}
    data.users.push(new_user)
    const updatedData = JSON.stringify(data, null, 2);
    fs.writeFileSync('users.json', updatedData, 'utf-8');
    res.send('Hello your account is now created!')
})

async function hashPassword(password) {
  try {
    const salt = await bcrypt.genSalt(10); // 10 is the number of salt rounds
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (error) {
    throw error;
  }
};

app.post('/login',async (req,res)=>{
    const {username,password} = req.body;
    // Check the username 
    const dataRaw = fs.readFileSync('users.json','utf-8')
    const data = JSON.parse(dataRaw)
    const users = data.users
    const usernameExist = users.find(item=>item.username === username)
    if (!usernameExist) return res.status(404).send('Username is not registered')
    const checkPassword = await comparePassword(password, usernameExist.crypted_password)
    if (!checkPassword) return res.status(401).send('Wrong password')
    res.send(`Hi ${usernameExist.first_name} welcome back again !`)
})


async function comparePassword(userEnteredPassword, storedHashedPassword) {
  try {
    const result = await bcrypt.compare(userEnteredPassword, storedHashedPassword);
    // if (result === true) {
    //   console.log('Password is correct.');
    // } else {
    //   console.log('Password is incorrect.');
    // }
    return result
  } catch (error) {
    console.error('Error comparing passwords:', error);
  }
};

app.get('/users',(req,res)=>{
    const dataRaw = fs.readFileSync('users.json','utf-8')
    const data = JSON.parse(dataRaw)
    res.json(data.users)
})

app.get('/users/:id',(req,res)=>{
    const id = Number(req.params.id);
    const dataRaw = fs.readFileSync('users.json','utf-8')
    const data = JSON.parse(dataRaw)
    const users = data.users
    const user = users.find(item=>item.id === id)
    if (!user) return res.status(404).send('This user not exist')
    res.json(user)
})

app.put('/users/:id',(req,res)=>{
    const id = Number(req.params.id);
    const {email,username} = req.body;
    const dataRaw = fs.readFileSync('users.json','utf-8')
    const data = JSON.parse(dataRaw)
    const users = data.users
    const user = users.find(item=>item.id === id)
    if (!user) return res.status(404).send('This user not exist')
    if (username.length !== 0) user.username = username;
    if (email.length !== 0) user.email = email;
    const updatedData = JSON.stringify(data, null, 2);
    fs.writeFileSync('users.json', updatedData, 'utf-8');
    res.send('User updated successfully');
})