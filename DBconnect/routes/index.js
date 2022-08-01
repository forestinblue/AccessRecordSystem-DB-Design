
var express = require('express');
var router = express.Router();
const mysql = require("mysql");

let client = mysql.createConnection({
  user: "root",
  password: "system",
  database:"inoutsystembluzen"

})

module.exports = router;




//라우터의 get()함수를 이용해 request URL('/')에 대한 업무처리 로직 정의
/*
router.get('/', function(req, res, next){
  res.render('index', { title: 'Express' });
});

//모듈에 등록해야 app.js에서 app.use 함수를 통해서 사용가능
module.exports = router;

*/
