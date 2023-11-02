const express = require('express')
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.get('/api/hello', (req,res)=>{
    res.send('Hello From Express')
})

app.post('/api/world', (req,res) => {
    const msg = req.body.msg;
    res.send(`I received your POST request. This is what you sent me: ${msg}`)
})

app.listen(port,()=>{
    console.log('Server is running on port 5000')
})