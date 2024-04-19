const http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    const baseURL = req.protocol + "://" + req.headers.host + "/"; // `http://${req.headers.host}`;
    const reqURL = new URL(req.url, baseURL);
    let path = reqURL.pathname;

    console.log(reqURL);

    if (path === "/params") {
        res.writeHead(200, {
            "Content-Type": "text/html",
          });
        const searchParams = new URLSearchParams(reqURL.searchParams);
        console.log("searchParams", searchParams);

      res.write(searchParams.toString("a-b06=i"));
     
    } else {
      res.writeHead(404, {
        "Content-Type": " text/html",
      });
      res.write("page not found");
    }
    res.end();

  })
  .listen(3002);
