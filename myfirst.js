//reads the data from the file called input.txt and displays it as string
//var fs = require("fs");
//var datd = fs.readFileSync('input.txt');
//console.log(data.toString());
//console.log("Program Ended");




var fs = require("fs");
var data;
fs.readFile('input.txt', data);
 //{
  //  if (err) return console.log(err +"System error");
    console.log(data.toString());
//};

console.log("Program Ended");
