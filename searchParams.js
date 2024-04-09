const http = require("http");
const url = require("url");

http.createServer(

    function (req, res) {
       
        let path = req.url;

        const baseURL = `http://${req.headers.host}`;
        const reqURL = new URL(req.url, baseURL);
        console.log(reqURL);
        const searchParams = new URLSearchParams(reqURL.searchParams);


        if (path === "/params") {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            console.log("searchParams", searchParams)

            res.write("a=5=& b=6")
            //console.log(searchParams.get(""))
           // console.log("search Params firstname", searchParams.getall(" "));
            
            res.end();
        }
        else{
            res.writeHead(404, {
                "Content-Type": " text/html"
            })
            res.write("page not found")
        }

       

    }).listen(3002)