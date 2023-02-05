const http=require('http');
const { clearScreenDown } = require('readline');
 
function reqListener(req,res){
    console.log(req);
}
const server =http.createServer(reqListener);
 server.listen(3000);

