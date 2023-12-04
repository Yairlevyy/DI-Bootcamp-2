const express = require('express')
const cookieParser = require('cookie-parser')
const users_router = require('./router.js')

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use('/users',users_router)

app.listen(3001,()=>{
    console.log("run on port 3001")
});