const http = require('http');

const server = http.createServer((req,res)=>{ //request, response
    if(req.url==='/'){
        res.end('Welcome to our homepage')
    }

    if(req.url==='/about'){
        res.end('Here is our short history')
    }

    else{
        res.end(
            `<h1>Hi! Error.</h1>`
        )
    }
})

server.listen(5000)