var express = require('express');
var router = express.Router();
var cheerio = require('cheerio')
var request = require('request')
var url = 'http://ncov.mohw.go.kr/index_main.jsp'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://corona-data.herokuapp.com/infected"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Origin", "https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


module.exports = router;
