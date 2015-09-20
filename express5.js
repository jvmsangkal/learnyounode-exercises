var express = require('express'),
    stylus = require('stylus'),
    app = express(),
    static_dir = process.argv[3] || path.join(__dirname, 'public');

app.use(express.static(static_dir));
app.use(stylus.middleware(static_dir));

app.listen(process.argv[2]);