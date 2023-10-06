const express = require('express');
const app = express();
const router = require('./routes/quiz.js')

app.listen(5000,()=>{
    console.log('server is running on port 5000')
});

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/quiz',router)