const http = require('http');

const server = http.createServer((req, res) => {
    
    res.end('Puneet');
});

server.listen(4000);
