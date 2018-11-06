var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456"
});

con.connect(function (err) {
    if (err) 
        throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE belongDB", function (err, result) {
        if (err) 
            throw err;
        console.log("Database created");
    });
    var sql = "CREATE TABLE users (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,user_name VARCH" +
            "AR(40) NOT NULL, last_name VARCHAR(40) NOT NULL, gender VARCHAR(6) NOT NULL, u" +
            "rl VARCHAR(255) NOT NULL, date TIMESTAMP)";

            con = mysql.createConnection({
              host: "localhost",
              user: "root",
              password: "123456",
              database: "belongDB"
            });
    con.query(sql, function (err, result) {
        if (err) 
            throw err;
        console.log("Table created");
    });
});