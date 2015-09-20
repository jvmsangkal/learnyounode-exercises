var express = require('express'),
    crypto = require('crypto'),
    app = express();

app.put('/message/:id', function (req, res){
    var id = req.params.id,
        data = crypto.createHash('sha1')
                .update(new Date().toDateString() + id)
                .digest('hex');
    res.end(data);
});

app.listen(process.argv[2]);