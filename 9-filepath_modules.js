const path = require('path')

console.log(path.sep)
//returns the slash that's used as separator

const filePath = path.join('/content/','subfolder','test.txt')
console.log(filePath);
//creates a valid filepath from folder and file names

const base = path.basename(filePath)
console.log(base)
//returns file basename

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute);
//returns absolute path of passed in file/folder


