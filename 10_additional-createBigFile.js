// Used as variables are not large enough to hold data from large text files 

const {writeFileSync} = require('fs')

for(let i = 0; i < 10000; i++){
    writeFileSync('./content/big.txt',`hello world ${i}\n`,{flag: 'a'})
}

