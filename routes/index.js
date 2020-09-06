var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use(function (req, res, next) {
  // res.header("Access-Control-Allow-Origin:", "*");
  res.header("Access-Control-Allow-Origin", "https://corona-data.herokuapp.com/infected"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


module.exports = router;
