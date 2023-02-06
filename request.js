const http=require('http');


const server =http.createServer( (req,res)=>{
        console.log(req.headers);
        process.exit();//to end the process
    });
 server.listen(8000);

