const EventEmitter = require('events')

const customEmitter = new EventEmitter()

//on - listens for events 
//emit - emits events 

customEmitter.on('response',()=>{
    console.log(`data received `)
})

customEmitter.on('response',(name,id)=>{        //parameters are passed from event
    console.log(`Name: ${name}, ID: ${id} `)
})


customEmitter.emit('response','nirmal',34)

//One event can have multiple responses. 

// Order matters. Before a response is emitted, listeners have to be setup.