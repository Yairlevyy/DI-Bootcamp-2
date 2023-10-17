const express = require('express')
const {
    getAllBooks,
    getBook,
    createBook
} = require('../controllers/books.controllers.js')

const books_router = express.Router();

books_router.get('/',getAllBooks)
books_router.get('/:id',getBook)
books_router.post('/',createBook)

module.exports = books_router;