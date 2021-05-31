const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('request event');
    res.end('Hello World')
})

server.listen(5000,()=>{
    console.log('Server listening on port: 5000');
})

//Listen is async - it is waiting for requests to come in and 
// responds to every request by replying for 'request event'