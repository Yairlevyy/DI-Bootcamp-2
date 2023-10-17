const db = require('../config/books.js')

const _getAllBooks = () => {
    return db('books_table').select('*').orderBy('title')
}

const _getBook = (id) => {
    return db('books_table').select('*').where({id})
}

const _createBook = (title,author) => {
    return db('books_table').insert({title,author},["id", "title", "author"]);
}

module.exports = {
    _getAllBooks,
    _getBook,
    _createBook
}