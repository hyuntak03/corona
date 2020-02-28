var cheerio = require('cheerio')
var request = require('request')
var url = 'http://ncov.mohw.go.kr/index_main.jsp'

request(url, function(error, response, body){
    var $ = cheerio.load(body)
    $('.co_cur > ul').each(function(){
        text = $(this).text()
        test_text = text.toString()
        test_text = test_text.split('\n')
        a = test_text[1].replace(/[^0-9]/g,"")
        console.log(test_text[1].replace(/[^0-9]/g,""))
    })
});