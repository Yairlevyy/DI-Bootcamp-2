const express = require('express');
const app = express();
const fetchPosts = require('./data/dataService.js')

app.listen(5000,()=>{
    console.log('server is running on port 5000')
})

app.get('/posts',async (req,res)=>{
    try {
        const posts = await fetchPosts();
        console.log('Data successfully retrieved !')
        res.json(posts)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
  }
})

