var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  //console.log(req.headers.host);
  res.render('index', { title: 'Express', host: req.headers.host });
});

module.exports = router;
