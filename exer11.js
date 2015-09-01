var http = require('http'),
    fs = require('fs'),
    server = http.createServer(function (req, res) {
        res.writeHead(200, { 'content-type': 'text/plain' });
        src = fs.createReadStream(process.argv[3]);
        src.pipe(res);
    });

server.listen(process.argv[2]);