const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'message.txt');

if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '', 'utf8');
}
function routeHandler (req, res){
    if(req.url === '/'){
        const message = fs.readFileSync('message.txt', 'utf-8');
        res.write('<!DOCTYPE html>')
        res.write("<head><title>Message App</title></head>")
        res.write('<body>')
        res.write(`<p> ${message} </p>`)
        res.write('<form action = "/message" method="POST">')
        res.write('<input type = "text" name="message">')
        res.write('<button type="submit">Send</button>')
        res.write('</form>')
        res.write('</body>')
        res.write('</html>')
        return res.end();
    }
    if(req.url === '/message' && req.method === 'POST'){
        const messageData = [];
        req.on('data', (chunks)=>{
            messageData.push(chunks);
        })
        req.on('end', ()=>{
            const parsedData = Buffer.concat(messageData).toString();
            const message = parsedData.split('=')[0];
            fs.writeFileSync('message.txt', message);
            res.statusCode = 302;
            res.setHeader('location', '/'); 
            console.log("server working");
            return res.end();
        })
        
    }
}

module.exports = routeHandler;