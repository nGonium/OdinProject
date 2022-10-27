const express = require('express')
const path = require('path');

const PORT = 8080;

const app = express()
app.use(express.static('public', {extensions: ['html']}))
app.use('/', (req, res, next) => {
  try {
    res
      .status(404)
      .sendFile(path.resolve('public', '404.html'))  
  } catch (err) {
    next(err)
  }
  
})
app.use('/', (err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Error 500: Internal Server Error')
})
app.listen(PORT)

module.exports = app