setInterval(()=>{
    console.log('hello world');
}, 2000)
console.log(`I will run first`);

// The 'I will run first' line is executed first
// Process goes on infinite loop printing hello world every two seconds once


//ASYNC function (setInterval) is offloaded and run again when 
//the sync processes have all been run 

