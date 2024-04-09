const http = require("http");
const fs = require("fs");


http.createServer(function(req, res){
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write("client asked " + req.url);
  res.end();
}).listen(3001)
