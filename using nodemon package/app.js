const http=require('http');
const  routes = require('./routingRequest')

console.log(routes.someText);
const server = http.createServer( routes.handler);
server.listen(8000);