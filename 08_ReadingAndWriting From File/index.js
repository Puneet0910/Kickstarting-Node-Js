const http = require('http');
const file = require('fs');
const server = http.createServer((req, res)=>{
    const url = req.url;
    if (url === '/') {
        file.readFile("message.txt", {encoding : "utf-8"}, (err, data)=>{
            if(err){
                console.log(err);
            }
            res.write('<html>')
        res.write('<head><title>Message</title></head>')
        res.write('<body>')
        res.write(`<p> ${data} </p>`)
        res.write('<form action = "/message" method = "POST">')
        res.write('<input type = "text" name = "message"></input>')
        res.write('<button type = "submit">Submit</button>')
        res.write('</form>')
        res.write('</body>')
        res.write('</html>')
        return res.end();
        })
        
    }
    if(url === '/message' && req.method === 'POST'){
        const body = [];
        req.on('data', (chunk)=>{
            body.push(chunk);
        })
        req.on('end', ()=>{
           const parseBody = Buffer.concat(body).toString();
           const message = parseBody.split('=')[1];
           file.writeFileSync('message.txt', message);
           res.statusCode = 302;
        res.setHeader('location', '/');
        return res.end();
        })
    }
})

server.listen(3000);