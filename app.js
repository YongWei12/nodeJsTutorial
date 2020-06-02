// core modules--> look for a global module in node js
const http = require('http');
const routes = require('./routes')


const server = http.createServer(routes.handler);
console.log(routes.someText);



//node js will listen to incoming requests.
//default is localhost and 8000 port
server.listen(3000);