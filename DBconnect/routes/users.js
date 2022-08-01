var express = require('express');
var router = express.Router();

const users = require('../services/test');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try{
    res.json(await users.getUsers());
  }catch (err){
    console.error(err.message);
    next(err);
  }
});

module.exports = router;

//config에서 db.js으로 sql 정보 바꾸다
//users/js에서 비동기 함수를 하나 만들었다.
//라우터인 user.js로 날리는 것
