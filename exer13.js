var http = require('http'),
    url = require('url'),
    server = http.createServer(function (req, res) {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        create_route('GET', '/api/parsetime', function (request, response) {
            var d = new Date(request.query.iso);

            response.end(JSON.stringify({
                hour: d.getHours(),
                minute: d.getMinutes(),
                second: d.getSeconds()
            }));
        });

        create_route('GET', '/api/unixtime', function (request, response) {
            var d = new Date(request.query.iso);

            response.end(JSON.stringify({unixtime: d.getTime()}));
        });

        function create_route(method, route, callback) {
            var data = url.parse(req.url, true);
            if (req.method === method && data.pathname === route) {
                req.query = data.query;
                callback(req, res);
            }
        }
    });


server.listen(process.argv[2]);