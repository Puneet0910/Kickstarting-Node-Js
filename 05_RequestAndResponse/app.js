const httpService = require('http');

const server = httpService.createServer((req, res) => {
    res.setHeader('content-type', 'text/html');
    if (req.url === '/home') {
        res.write('<html>');
        res.write('<head><title>Home</title></head>');
        res.write('<body>');
        res.write('<h1>Welcome home</h1>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else if (req.url === '/about') {
        res.write('<html>');
        res.write('<head><title>About Us</title></head>');
        res.write('<body>');
        res.write('<h1>Welcome to About Us page</h1>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else if (req.url === '/node') {
        res.write('<html>');
        res.write('<head><title>Node Project</title></head>');
        res.write('<body>');
        res.write('<h1>Welcome to my Node.js project</h1>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else {
        res.write('<html>')
        res.write('<head><title>My Node Server</title></head>')
        res.write('<body>')
        res.write('<h1>Hello from my node js server</h1>')
        res.write('</body>')
        res.write('</html>')
        res.end();
    }
})

server.listen(4000);