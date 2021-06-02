const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt')

stream.on('data',(result)=>{
    console.log(result);
})

// Reads data in 64 kilobyte chunks