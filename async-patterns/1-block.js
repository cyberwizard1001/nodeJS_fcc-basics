const http = require('http')

const server = http.createServer((req,res)=>{

if(req.url === '/'){
    res.end('Homepage')
}

if(req.url === '/about'){
    //BLOCKING CODE!!!!
    for(let i = 0; i<1000; i++)
    {
        for(let j = 0; j<1000; j++){
            console.log(`${1}, ${2}`);
        }
    }
    res.end('About Page')

    // Only when the loop completes, the rest of the 
    // code is allowed to run. So other pages take time to load. Why? Loop is synch.
    // So, we prefer async. 
}

res.end("Error")

})

server.listen(5000,()=>{
    console.log('Server is listening on port 5000...');
})