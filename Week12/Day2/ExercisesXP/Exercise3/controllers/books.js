let books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    year: 1949
  }
];

const getAllBooks = (req,res) =>{
    res.json(books)
}

const addBook = (req,res) => {
    const {id,title,author,year} = req.body;
    const new_book = {id,title,author,year}
    books.push(new_book)
    res.json('Book was added succesfully !')
}

const updateBook = (req,res) => {
    const id = Number(req.params.id)
    const {title,author,year} = req.body
    const index = books.findIndex(item=>item.id === id)
    if (title.length != 0) books[index].title = title
    if (author.length != 0) books[index].author = author
    if (year.length != 0) books[index].year = year
    res.json(books[index])
}

const deleteBook = (req,res)=>{
    const id = Number(req.params.id)
    const index = books.findIndex(item=>item.id === id)
    if (!index) res.status(404).json('Book not found!')
    books = books.filter(item=>item.id != id)
    res.json(books)
}

module.exports = {
    getAllBooks,
    addBook,
    updateBook,
    deleteBook
}