const express = require('express');
const app = express();
const router = require('./routes/index.js')

app.listen(5000,()=>{
    console.log('server is running on port 5000')
})

app.use(express.json())

app.use('/',router)
