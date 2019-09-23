const http = require("http");

let citac = 0;

http.createServer((req, res) => {
    citac++;
    res.writeHead(200, {"Content-type": "text/html"});
    res.end(`<html><body>Pocet volani: ${citac}</body></html>`);

}).listen(8888);