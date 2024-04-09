const http = require("http");

http.createServer(

    function (req, res) {
       
        let path = req.url;

        console.log("path", path);
        if ( path  === "/") {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
                res.write("Hello world");
        }
       
        
        else if( path === "/firstname") {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
                res.write("Miki");
        }
       
        
        else if( path === "/lastname") {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
                res.write("Mimi");
        }
       
        
        else {
            res.writeHead(404, {
                "Content-Type": " text/html"
            })
            res.write("page not found")
        }

        res.end();

    }).listen(3000);