const express = require('express');
const app = express();

const posts_router = require('./routes/posts.routes.js')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(3001, () => {
  console.log("run on port 3001");
});

app.use('/',posts_router)