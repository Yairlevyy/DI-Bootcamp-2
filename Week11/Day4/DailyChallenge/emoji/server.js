const express = require('express');
const app = express();
const emoji = require('./emoji.js');
const randomEmoji = require('./functions.js')

app.listen(5000,()=>{
    console.log('server is running on port 5000')
});

app.use(express.static('public'));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/emoji',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/api/emoji',(req,res)=>{
    const choice = req.body.choice;
    const num = randomEmoji(emoji);
    const emoji_selected = emoji[num].name;

    // res.json(`${choice} ${emoji_selected}`)

    if (choice === emoji_selected){
        res.json('good')
    } else {
        res.json('wrong')
    }
})
