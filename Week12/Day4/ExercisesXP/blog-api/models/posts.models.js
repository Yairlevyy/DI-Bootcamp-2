const db = require('../config/posts.js')

const _getAllPosts = () => {
    return db('posts').select('*').orderBy('title')
}

const _getPost = (id) => {
    return db('posts').select('*').where({id})
}

const _insertPost = (title,content) => {
    return db('posts').insert({title,content},["id", "title", "content"]);
}

const _updatePost = (id,title,content) => {
    return db('posts').update({title,content},["id", "title", "content"]).where({id})
}

const _deletePost = (id) => {
    return db('posts').where({id}).del().returning(["id","title","content"])
}

module.exports = {
    _getAllPosts,
    _getPost,
    _insertPost,
    _updatePost,
    _deletePost
}