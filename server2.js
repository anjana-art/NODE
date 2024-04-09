const http = require("http");

http.createServer(

    function (req, res) {

        let path = req.url;

        if (path === "/") {
            res.write("Hello world");
        }
        else if (path === "/firstname") {
            res.write("Miki");
        }
        else if (path === "/lastname") {
            res.write("Mimi");
        }
        else {
            res.writeHead(404, {
                "Content-Type": " text/html"
            })
            res.write("page not found")
        }

        res.end();

    }).listen(3001);