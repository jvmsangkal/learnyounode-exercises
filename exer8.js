var http = require('http'),
    url = process.argv[2];

http.get(url, callback);

function callback (response) {
    var res = '';
    response.setEncoding('utf8');
    response.on('data', function (data) {
        res += data;
    });
    response.on('error', console.error);
    response.on('end', function () {
        console.log(res.length);
        console.log(res);
    });
}