const mysql = require("mysql");

/*
const config = {
    db: {
        host: "127.0.0.1",
        user: "root",
        password: "sysytem",
        port:"3306",
        database: "inoutsystembluzen",
    },
};

module.exports = config;

*/


const db = {
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    password: "system",
    database: "inoutsystembluzen",
  };

  
module.exports = {
    init: function () {
      return mysql.createConnection(db);
    },
    connect: function (conn) {
      conn.connect(function (err) {
        if (err) console.error("mysql connection error : " + err);
        else console.log("mysql is connected successfully!");
      });
    },
  };