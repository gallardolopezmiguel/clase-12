const http = require('http'); //control sobre el modulo

const server = http.createServer(
    function(req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write("okay, this is a response from the server class_12");
        res.end();
    
});

server.listen(8000);