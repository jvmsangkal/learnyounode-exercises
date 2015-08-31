var fs = require('fs'),
    path = require('path');

module.exports = function (dir, ext, callback) {
    fs.readdir(dir, on_read_dir);

    function on_read_dir(err, files) {
        var data = [];
        if (err) {
            return callback(err);
        }

        files.forEach(function (file) {
            if (path.extname(file) === '.' + ext) {
                data.push(file);
            }
        });

        callback(null, data);
    }
};
