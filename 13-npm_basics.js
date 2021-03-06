// npm - gloval command that comes with node
// npm --version

// local dependency - use it only in this particuilar project
// npm i <packageName>

// global dependency - use it in any project 
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac/linux)

// package.json - manifest file (Stores important info about project/package)

// ways to create - manual or automatic 
// npm init creates it automatically 
// npm init -y uses default options 

const lodash = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = lodash.flattenDeep(items);
console.log(newItems);
console.log('Testing nodemon');