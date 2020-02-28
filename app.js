var express = require('express'); 
var app = express();
var cheerio = require('cheerio')
var request = require('request')
var url = 'http://ncov.mohw.go.kr/index_main.jsp'
var test_num = ''
var port = process.env.PORT || 3000;

app.get('/', function (req, res) { 
    res.send('김 나')
}); 

app.listen(port, function () {
    console.log('서버 실행중...');
});

