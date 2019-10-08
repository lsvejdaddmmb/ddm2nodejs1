const http = require("http");
const fs = require("fs");

let citac = 0;

http.createServer((req, res) => {
    console.log(req.url);
    if (req.url == "/") {
        citac++;
        // res.writeHead(200, {"Content-type": "text/html"});
        // let html = `<html><head><meta charset="UTF-8"></head><body>Pocet volani: ${citac}`;
        // html = html + `<input type="button" value="vynuluj" onclick="window.location.href='/nulujcitac'">`;
        // html = html + `</body></html>`;
        // res
        fs.readFile('index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });

    } else if (req.url.endsWith(".png")) {
        let fileName = req.url.substr(1);
        fs.readFile(fileName, function(err, data) {
            res.writeHead(200, {'Content-Type': 'image/png'});
            res.write(data);
            res.end();
        });

    } else if (req.url == "/nulujcitac") {
        citac = 0;
        res.writeHead(302, {"Location": "/hokuspokus"});
        //res.end(`<html><head><meta charset="UTF-8"></head><body><h1>Citac vynulovan</h1>Pocet volani: ${citac}</body></html>`);
        res.end();
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