var express = require('express'),
    app = express();

app.get('/search', function (req, res) {
    var data = req.query;
    res.send(data);
});

app.listen(process.argv[2]);