var fs = require('fs'),
    path_to_file = process.argv[2];

fs.readFile(path_to_file, 'utf8', callback);

function callback (err, data) {
    var lines;
    if (err) {
        return err;
    }

    lines = data.split('\n').length - 1;
    console.log(lines);
}