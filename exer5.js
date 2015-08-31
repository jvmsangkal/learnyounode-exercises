var dir = process.argv[2],
    ext = '.' + process.argv[3],
    fs = require('fs'),
    path = require('path');

fs.readdir(dir, on_read_dir);

function on_read_dir (err, list) {
    if (err) {
        return err;
    }
    list.forEach(function (file) {
        if (path.extname(file) === ext) {
            console.log(file);
        }
    });
}