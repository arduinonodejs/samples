var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var host = req.headers.host;
  res.render('index', { title: 'Express', host: host });
});

module.exports = router;
