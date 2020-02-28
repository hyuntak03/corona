var express = require('express'); 
var app = express();
var cheerio = require('cheerio')
var request = require('request')
var url = 'http://ncov.mohw.go.kr/index_main.jsp'
var test_num = ''
var port = process.env.PORT || 3000;

app.get('/', function (req, res) { 
    request(url, function(error, response, body){
        var $ = cheerio.load(body)
        $('.co_cur > ul').each(function(){
            text = $(this).text()
            test_text = text.toString()
            //test_text = test_text.replace(/(^\s*)|(\s*$)/,"")
            test_text = test_text.split('\n')
            for(var i = 0; i<= 4;i++){
                test_num += test_text[i].replace(/(^\s*)|(\s*$)/,"") + '\n'
            }
            res.send(test_num)
            //console.log(test_num)
        })
        // console.log(num)
    });
}); 

app.listen(port, function () {
    console.log('서버 실행중...');
});

