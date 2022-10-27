const express = require('express')
const path = require('path');

const PORT = 8080;

const app = express()
app.use(express.static('public', {extensions: ['html']}))
app.use('/', (req, res) => {
  res
    .status(404)
    .sendFile(path.resolve('public', '404.html'))
})
app.listen(PORT)

module.exports = app