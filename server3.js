var fs = require("fs");

try{
    var data = fs.readFileSync("a.txt", 'utf-8');
    console.log(data);
}
catch(e){
    console.log("can't read from a.txt");
}