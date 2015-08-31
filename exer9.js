var http = require('http'),
    bl = require('bl'),
    urls = process.argv.slice(2),
    ctr = urls.length,
    result = {};

urls.forEach(function (url) {
    http.get(url, function (response) {
        response.pipe(bl(function (err, data) {
            if (err)
                return console.error(err);
            data = data.toString();
            result[url] = data;
            if (!--ctr) {
                urls.forEach(function (url) {
                    console.log(result[url]);
                });
            }
        }));
    });
});