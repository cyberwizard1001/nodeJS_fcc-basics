const {readFile, writeFile,} = require('fs').promises;
//const util = require('util');

//Promise: A pending state - the calling function continues executing 
//while the promise is pending until it resolves, giving the caller function whatever
//data was being requested.

//const readFilePromise = util.promisify(readFile)
//const writeFilePromise = util.promisify(writeFile)

//const { reject } = require('lodash');
//const { resolve } = require('path/posix');


/*
const getText = (path) =>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,data)=>{
            if(err){
                reject(error);
            }
        
            else{
                resolve(data)
            }
    })
})


}

*/

//getText('/.content/first_text.txt').then(result => console.log(result))
//.catch((err) => console.log(err))

//Synch. Problem arises when we try to read and write 
//multiple files

const start = async() => {
    try{
        const first = await readFile('./content/first_text.txt','utf-8');
        const second = await readFile('./content/second_text.txt','utf-8')

        await writeFile(
            './content/result-mind-grenade.txt',
            `THIS IS AWESOME: ${first}, ${second}`,
            {flag: 'a'})

        const final = await readFile('./content/result-mind-grenade.txt','utf-8')
        console.log(final);
    
    } catch(error){
        console.log(error);
    }
    
}    


start()