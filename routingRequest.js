const http=require('http');
const fs = require('fs');


const server =http.createServer( (req,res)=>{

const url = req.url;
const method=req.method
     if (url==='/') {
        res.setHeader('Content-type','text/html');
        res.write('<html>');
        res.write('<head><title>Simple Form</title></head>')
        res.write('<body><form  action="/message" method="post"><h1>Sign In</h1><label>E-mail </label></br><input type="email" name="email"/></br></br><label>Password</label></br><input type="password"/></br></br><button type="submit">Login</button></form></body>')
        res.write('</html>');
        return res.end();
    }
    const body = []
    if (url==='/message' && method==='POST') {
       req.on('data',(chunk)=>{
        body.push(chunk);
         
       })
       req.on('end',()=>{
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split("=")
        fs.writeFileSync('hello.txt',message[1 ]);
       })
        
        fs.writeFileSync('hello.txt', 'Hello from text file')
        res.setHeader('Location','/')
        res.statusCode=302;
        return res.end();
    }

    });
 server.listen(8000);

