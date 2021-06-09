 const http = require('http')

// Using Event emitter API
const server = htpp.createServer()

//emits request event
//subscribe / listen / respond

server.on('request',(req,res)=>{
    res.end('Welcome')
})

//For more events, check the documentation of node http Server

server.listen(5000)

// LESSON : Events are used a lot in Node!