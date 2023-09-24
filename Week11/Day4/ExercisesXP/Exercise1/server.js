const express = require('express');
const app = express();
const posts = require('./data.js')

app.listen(3000,()=>{
    console.log('server running on port 3000')
});

app.get('/posts',(req,res)=>{
    res.send(posts)
})

app.get('/posts/:id',(req,res)=>{
    const id = Number(req.params.id)
    const post = posts.find(post=>post.id === id)
    res.send(post)
})

app.post('/posts',(req,res)=>{
    const {id,title,content} = req.query;
    const newPost = {id,title,content}
    console.log(newPost)
    posts.push(newPost)
    res.send(posts)
})

app.put('/posts/:id',(req,res)=>{
    const id = Number(req.params.id);
    const new_title = req.query.title;
    const index = posts.findIndex(obj => obj['id'] === id);
    posts[index].title = new_title;
    res.send(posts)
})

app.delete('/posts/:id',(req,res)=>{
    const id = Number(req.params.id);
    const index = posts.findIndex(obj => obj['id'] === id);
    posts.splice(index,1)
    res.send(posts)
})