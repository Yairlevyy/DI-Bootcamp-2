const express = require('express');
const app = express();
const books = require('./data.js')

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

app.listen(5000,()=>{
    console.log('server is running on port 5000')
})

app.get('/api/books',(req,res)=>{
    res.json(books)
})

app.get('/api/books/:bookId',(req,res)=>{
    const id = Number(req.params.bookId)
    console.log(id)
    const book = books.find(item=>item.id === id);
    if (!book) {
        return res.status(404).send('Book not found')
    }
    res.json(book)
})

app.post('/api/books',(req,res)=>{
    const {id,title,author,publishedYear} = req.body;
    const new_book = {id,title,author,publishedYear};
    books.push(new_book);
    res.status(201).json(new_book)
})