var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/:id', function (req, res, next) {
  res.send('user ' + req.params.id);
  // res.render('index', { title: 'Express' });
});
module.exports = router;
