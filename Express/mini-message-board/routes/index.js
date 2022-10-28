var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages });
});

router.get('/new', function(req, res, next) {
  res.render('form')
})

router.post('/new', (req, res, next) => {
  const { user, text } = req.body
  messages.push({ user, text })
  res.redirect('/')
})

module.exports = router;
