const {readFileSync,writeFileSync} = require('fs')
console.log('start');
//Writing and reading files 

const first = readFileSync('./content/first_text.txt','utf-8')
const second = readFileSync('./content/second_text.txt','utf-8')

console.log(first,second)

writeFileSync('./content/result-sync.txt',
   `Here is the result : ${first},${second}`,
   {flag: 'a'}
)

console.log('done with this task')
console.log('starting the next one');