const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt','utf-8')

stream.on('data',(result)=>{
    console.log(result);
})

stream.on('error',(err) => console.log(err)); 


// Reads data in 64 kilobyte chunks
// Events: open, close, ready

//Alternative: 
const stream = createReadStream('./content/big.txt',{highWaterMark: 90000})
//Setting custom stream size

stream.on('error',(err)=>{
    console.log(err)
})