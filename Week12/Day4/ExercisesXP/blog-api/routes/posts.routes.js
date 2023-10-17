const express = require('express')
const {
    getAllPosts,
    getPost,
    insertPost,
    updatePost,
    deletePost
} = require('../controllers/posts.controllers.js')

const posts_router = express.Router();

posts_router.get('/posts',getAllPosts)
posts_router.get('/posts/:id',getPost)
posts_router.post('/posts',insertPost)
posts_router.put('/posts/:id',updatePost)
posts_router.delete('/posts/:id',deletePost)

module.exports = posts_router;
