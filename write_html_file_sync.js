var fs = require("fs");
var path = require("path");

var filePath = path.join("b.html");
var stats = fs.statSync(filePath);

if(stats.isFile()){
    fs.readFile(filePath, "UTF-8", function(err, contents){
        console.log(contents);
    })
}

//i just wanted to return text from html file not whole code, 