const fs = require('fs');
const requestHandeler = (req,res)=> {

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

    if (url==='/message' && method==='POST') {
        const body = []
       req.on('data',(chunk)=>{
        body.push(chunk);
         

       })
      return req.on('end',()=>{
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split("=")
        fs.writeFileSync('hello.txt',message[1]);
        fs.writeFileSync('hello.txt', 'Hello from text file')
        res.setHeader('Location','/')
        res.statusCode=302;
        return res.end();  
    })
        
      
    }
      res.setHeader('Content-type','text/html')
      res.write('<html>')
      res.write('<head><title>Simple Text</title></head>');
      res.write('<body><h1>Hello from node.js</h1>')
    };


// module.exports =  requestHandeler; to accses single function 


// module.exports = {
// handler:requestHandeler,           // to many funtion or exports many function
// someText:'Printing some text'
// }  


// exports.handler = requestHandeler;
// exports.someText='Printing some text'; //another exports method

module.exports.handler = requestHandeler;
module.exports.someText = 'Printing some text'
