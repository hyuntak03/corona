var express = require('express'); 
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function (req, res) { 
   res.send('김나 승회 언제와 ㅅㅂ'); 
}); 

app.listen(port, function () {
    console.log('서버 실행중...');
});

