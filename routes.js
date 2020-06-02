const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></input></form></body>')
        res.write('</html>')
        return res.end();

    } else if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunkOfData) => {
            console.log(chunkOfData);
            body.push(chunkOfData);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            //MessageChannel.txt is the name
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });

        })


    }
    // process.exit();
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    res.write('<body><h1>hello from my server</h1></body>')
    res.write('</html>')
    res.end();
};

module.exports = {
    handler: requestHandler,
    someText: "SomeHardcodedText"
};