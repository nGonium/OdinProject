const http = require('http')
const fs = require('fs/promises')
const path = require('path');

const PORT = 8080;
const STATIC_PAGES_DIR = '/static/page-routes'

const server = http.createServer(async (req, res) => {
  try {
    let page
    if (req.url === '/') {
      page = await fs.readFile(path.join(__dirname, STATIC_PAGES_DIR, 'index.html'))
    } else {
      page = await fs.readFile(path.join(__dirname, STATIC_PAGES_DIR, `${req.url}.html`))
    }
    res.writeHead(200, { 'Content-Type': 'text/html'})
      .write(page)
  } catch (err) {
    try {
      if (err.code !== 'ENOENT') {
        throw err
      }
      const page = await fs.readFile(path.join(__dirname, STATIC_PAGES_DIR, `404.html`))
      res.writeHead(404)
        .write(page)  
    } catch (err) {
      console.error(err);
      res.writeHead(500)
    }
  } finally {
    res.end()
  }
})

server.listen(PORT)
console.log(`Listening on ${PORT}`)