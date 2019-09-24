const http = require("http");

let citac = 0;

http.createServer((req, res) => {
    if (req.url == "/") {
        citac++;
    }
    res.writeHead(200, {"Content-type": "text/html"});
    res.end(`<html><head><meta charset="UTF-8"></head><body>Pocet volani: ${citac}</body></html>`);

}).listen(8888);