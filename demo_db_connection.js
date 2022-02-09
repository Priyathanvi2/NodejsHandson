//getting external modul mysql
var mysql = require('mysql');
//create connection with mysql
var con = mysql.createConnection({
  host: "localhost", // ip adress of server running mysql
  user: "yourusername",  //user name to your mysql
  password: "yourpassword"  //user password to your mysql
  database: "payroll"  //use this db to querying context
});

//query
con.connect("SELECT id,name FROM payroll Adminsctrator", function (err) {
  if (err) throw err;
  console.log("Result");
});