const {
    _getAllBooks,
    _getBook,
    _createBook
} = require('../models/books.models.js')

const getAllBooks = async (req,res) => {
    try {
        const data = await _getAllBooks();
        res.status(200).json(data)
    } catch(err) {
        res.status(404).json({msg:'Books not found'})
    }
};

const getBook = async (req,res) => {
    const id = Number(req.params.id)
    try {
        const data = await _getBook(id);
        res.status(200).json(data)
    } catch(err) {
        res.status(404).json({msg:'Books not found'})
    }
};

const createBook = async (req,res) => {
    const {title,author} = req.body;
    try {
        const data = await _createBook(title,author);
        res.status(200).json(data)
    } catch(err) {
        console.log(err)
        res.status(404).json({msg:'Book not created'})
    }
};

module.exports = {
    getAllBooks,
    getBook,
    createBook
}

