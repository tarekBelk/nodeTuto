const http = require('http');

// const server = http.createServer((req, res)=>{
//     res.write(`Hello world! ${req.url}`);
//     console.log(req);
//     res.end();
// })

const server = http.createServer((req, res)=>{
    if(req.url==='/'){
        res.end('Hello world');
    }
    if(req.url=='/about'){
        res.end('About us');
    }
    res.end(`<h1>Oops</h1> 
    page requested does not exist!
    <p> <a href="/">back</a></p>`)
})

server.listen(3000);
