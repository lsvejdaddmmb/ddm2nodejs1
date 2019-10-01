const http = require("http");

let citac = 0;

http.createServer((req, res) => {
    if (req.url == "/") {
        citac++;
        res.writeHead(200, {"Content-type": "text/html"});
        res.end(`<html><head><meta charset="UTF-8"></head><body>Pocet volani: ${citac}<input type="button" value="vynuluj" onclick="alert('zatim nefunguje :-P')"></body></html>`);
    } else if (req.url == "/hokuspokus") {
        res.writeHead(200, {"Content-type": "text/html"});
        res.end(`<html><head><meta charset="UTF-8"></head><body><h1>Můj hokus pokus</h1>blablabla</body></html>`);
    } else if (req.url == "/jentextik") {
        res.writeHead(200, {"Content-type": "text/plain"});
        res.end(`Muj textik`);
    } else if (req.url == "/citac/text") {
        res.writeHead(200, {"Content-type": "text/plain"});
        res.end("" + citac);
    } else if (req.url == "/citac/json") {
        res.writeHead(200, {"Content-type": "application/json"});
        let obj = {};
        obj.pocetVolaniServeru = citac;
        obj.datum = new Date();
        res.end(JSON.stringify(obj));
    } else {
        res.writeHead(404);
        res.end();
    }

}).listen(8888);