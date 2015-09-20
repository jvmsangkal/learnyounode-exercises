var express = require('express'),
    fs = require('fs'),
    app = express();

app.get('/books', function (req, res) {
    fs.readFile(process.argv[3], send_response);

    function send_response (err, data) {
        if (err) {
            res.warn(404);
        }

        res.json(JSON.parse(data));
    }
});

app.listen(process.argv[2]);