const express = require('express');
const path = require('path');
require('dotenv').config();

const users = require('./controllers/users');

// Middleware
const app = express()
const port = process.env.PORT || 3000;

console.log(process.env.BEST_CLASS);

app.use(express.json());
app.use(express.static(path.join(__dirname, '/../docs')))

/* Authentication
app.use(function (req, res, next) {
  const arr = (req.headers.authorization || "").split(" ");
  if (arr.length > 1 && arr[1] != null) {
    req.userId = +arr[1];
  }
  next();
});
*/

// API
app.get('/', (req, res) => {
  res.send('Hello World! You requested ' + req.url)
})

app.use('/users', users);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../docs/index.html'));
})

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send({ message: err.message })
})


// Init
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})