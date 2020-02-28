var cheerio = require('cheerio')
var request = require('request')
var url = 'http://ncov.mohw.go.kr/index_main.jsp'

// function num(){
//     request(url, function(error, response, body){
//         var $ = cheerio.load(body)
//         $('.co_cur > ul').each(function(){
//             text = $(this).text()
//             test_text = text.toString()
//             test_text = test_text.split('\n')
//             var a = test_text[1].replace(/[^0-9]/g,"")
//             //document.write(a)
//             //console.log(a)
//             //a = test_text[1].replace(/[^0-9]/g,"")
//             return a.toString();
            
//         })
//     });
// }

function a(){
    var b = 'test'
    return b
}
