const http=require('http');


const server =http.createServer( (req,res)=>{
        res.setHeader('Content-type', 'text/html');
        res.write('<html>')
        res.write('<head><title>Node.js </title></head>')
        res.write('<body><h1>Hello from Node.js</h1><p>Gayathri</p></body>')
        res.write('</html>')
        res.end();
      
    });
 server.listen(8000);

