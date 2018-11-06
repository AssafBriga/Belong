import express from 'express';
import multer from 'multer';
import mysql from 'mysql';
var fs = require('fs');
const router = express.Router();
var upload = multer({dest: 'public/files/'})

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "belongDB"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

  });




router.get('/getUsers', (req, res, next) => {
    con.query("SELECT * FROM users", function (err, result) {
        if (err) 
            throw err;
        console.log(result)
        res.json(result)
    });

});

router.post('/createNewUser', upload.single('userFile'), (req, res, next) => {
    res.json("http://localhost:4000/files/" + req.file.filename);
    var date = new Date()
        .toISOString()
        .replace(/T/, ' ')
        .replace(/\..+/, '')

    console.log(date)
    var sql = "INSERT INTO users (user_name, last_name, gender, url, date) VALUES ('" +
            req.body.user_name + "', '" + req.body.last_name + "', '" + req.body.gender + "', 'http://localhost:4000/files/" +
            req.file.filename + "','" + date + "')";
    con.query(sql, function (err, result) {
        if (err) 
            throw err;
        console.log("1 record inserted");
    });
});


module.exports = router;