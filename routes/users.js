var express = require('express');
var router = express.Router();
var mysql = require('mysql');


/* GET users listing. */
router.get('/', function (req, res, next) {

  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'listausuario'
  });

  connection.connect();

  connection.query('SELECT * from usuarios ', function (error, results, fields) {
    if (error) throw error;
    res.render("users",  { list: results })
  });

  connection.end();


});

module.exports = router;
