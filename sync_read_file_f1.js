var fs = require("fs");

try{
    var data = fs.readFileSync("a.txt", "utf-8")//read the file a.txt Sync means we wont continue until we finished reading.
    console.log(data);
}catch(e){
    console.log("can't read from a.txt.")
}