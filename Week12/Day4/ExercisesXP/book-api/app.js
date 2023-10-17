const express = require('express');
const app = express();

const books_router = require('./routes/books.routes.js')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(5000, () => {
  console.log("run on port 5000");
});

app.use('/api/books',books_router)