const express = require('express');
const app = express();

const users_router = require('./routes/users.routes.js')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(3001, () => {
  console.log("run on port 3001");
});

app.use('/',users_router)