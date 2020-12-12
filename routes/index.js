var express = require('express');
var router = express.Router();
const messages = [
  {
    text: "Всем хай!",
    user: "Вася",
    added: new Date()
  },
  {
    text: "Привет!",
    user: "Петя",
    added: new Date()
  }
];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Чатик', messages: messages });
});
router.post('/new', function(req, res, next) {
  messages.push({text:  req.body.messageText, user:  req.body.messageUser, added: new Date()});
  res.redirect('/')
});
module.exports = router;
