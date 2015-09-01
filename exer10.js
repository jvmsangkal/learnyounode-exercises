var net = require('net'),
    strftime = require('strftime'),
    server = net.createServer(function (socket) {
        socket.write(strftime('%F %H:%M\n',new Date()));
        socket.end();
    });

server.listen(process.argv[2]);