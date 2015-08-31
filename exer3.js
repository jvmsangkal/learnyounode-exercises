var fs = require('fs'),
    path_to_file = process.argv[2],
    buffer,
    newline_count;

    buffer = fs.readFileSync(path_to_file);
    newline_count = buffer.toString().split('\n').length - 1;

    console.log(newline_count);