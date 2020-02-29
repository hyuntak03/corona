var express = require('express');
var router = express.Router();
var cheerio = require('cheerio')
var request = require('request')
var url = 'http://ncov.mohw.go.kr/index_main.jsp'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/infected', function(req,res,next){
  request(url, function (error, response, body) {
    var $ = cheerio.load(body)
    $('.co_cur > ul').each(function () {
      text = $(this).text()
      test_text = text.toString()
      test_text = test_text.split('\n')
      var a = test_text[1].replace(/[^0-9]/g, "")
      //document.write(a)
      //console.log(a)
      //a = test_text[1].replace(/[^0-9]/g,"")
      res.send(a)
    })
  });
})

router.get('/release', function(req,res,next){
  request(url, function (error, response, body) {
    var $ = cheerio.load(body)
    $('.co_cur > ul').each(function () {
      text = $(this).text()
      test_text = text.toString()
      test_text = test_text.split('\n')
      var a = test_text[2].replace(/[^0-9]/g, "")
      //document.write(a)
      //console.log(a)
      //a = test_text[1].replace(/[^0-9]/g,"")
      res.send(a)
    })
  });
})

router.get('/die', function(req,res,next){
  request(url, function (error, response, body) {
    var $ = cheerio.load(body)
    $('.co_cur > ul').each(function () {
      text = $(this).text()
      test_text = text.toString()
      test_text = test_text.split('\n')
      var a = test_text[3].replace(/[^0-9]/g, "")
      //document.write(a)
      //console.log(a)
      //a = test_text[1].replace(/[^0-9]/g,"")
      res.send(a)
    })
  });
})


module.exports = router;
