//app.js 는 프로젝트의 중심이 되는 파일로서, express의 환경 설정, 미들웨어 등록 등 서버 운영에 필요한 코드를 작성합니다.
/*
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var http = require('http');

*/


var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var testRouter = require("./routes/test");

var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//미들웨어 등록 부분
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//라우터 함수인 usersRouter 변수의 경로를 /users 라는 가상 경로로 사용하겠다고 선언합니다.
app.use("/api", testRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;











/*
// view engine setup
app.set('views', path.join(__dirname, 'views'));
//뷰 페이지의 폴더 기본 경로로 __dirname + views 이름의 폴더를 사용하겠다는 의미입니다.
//예를 들어, express-generator로 애플리케이션 명을 foo로 작성했을 경우, foo/views 폴더가 뷰 폴더의 기본 경로가 됩니다.

app.set('view engine', 'jade');
//뷰 엔진으로 jade를 사용하겠다는 의미입니다.

//express-generator로 프로젝트를 생성할 때 express 프로젝트명 --view=jade 과 같이 jade 엔진을 선택했다면, view engine으로 jade가 설정됩니다.

//미들웨어 등록 부분
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//라우터 함수인 usersRouter 변수의 경로를 /users 라는 가상 경로로 사용하겠다고 선언합니다.

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

*/
