const {
    _getAllPosts,
    _getPost,
    _insertPost,
    _updatePost,
    _deletePost
} = require('../models/posts.models.js')

const getAllPosts = async (req,res) => {
    try {
        const data = await _getAllPosts();
        res.json(data)
    } catch (err) {
        res.status(404).json({msg:'Not Found'})
    }
};

const getPost = async (req,res) => {
    const id = Number(req.params.id);
    try {
        const data = await _getPost(id);
        res.json(data)
    } catch (err) {
        res.status(404).json({msg:'Not Found'})
    }
}

const insertPost = async (req,res) => {
    const {title,content} = req.body;
    try {
        const data = await _insertPost(title,content);
        res.json(data)
    } catch (err) {
        res.status(404).json({msg:'Not Found'})
    }
}

const updatePost = async (req,res) => {
    const id = Number(req.params.id);
    const {title,content} = req.body;
    try {
        const data = await _updatePost(id,title,content);
        console.log(data)
        res.json(data)
    } catch (err) {
        res.status(404).json({msg:'Not Found'})
    }
}

const deletePost = async (req,res) => {
    const id = Number(req.params.id);
    try {
        const data = await _deletePost(id);
        res.json(data)
    } catch (err) {
        res.status(404).json({msg:'Not Found'})
    }
}

module.exports = {
    getAllPosts,
    getPost,
    insertPost,
    updatePost,
    deletePost
};