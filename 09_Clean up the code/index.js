const http = require('http');

const routes = require('./route.js')

const server = http.createServer(routes);
server.listen(4000, ()=>{
    console.log("Server Listening on Port 4000");
})