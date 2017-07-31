var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:name', function (req, res, next) {
  console.log(req.params.name)
  next();
}, function (req, res, next) {
  res.send('hello')
});
router.get('/id/:id', function (req, res, next) {
  res.send('user ' + req.params.id);
  // res.render('index', { title: 'Express' });
});
module.exports = router;
