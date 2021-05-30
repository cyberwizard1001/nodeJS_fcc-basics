const {readFile,writeFile} = require('fs')

//Writing and reading files async
console.log('start');
readFile('./content/first_text.txt','utf8',(err,result)=> {
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second_text.txt','utf8',(err,result)=>{
        if(err)
        {
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first},${second}`,
            {flag: 'a'},
            (error,result)=>{
                if(err)
                {
                    console.log(err);
                    return
                }
                else{
                    console.log('done with this');
                }
            }
        )
    })
})
console.log('starting next task');
