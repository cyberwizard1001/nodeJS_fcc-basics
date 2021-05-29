//Modules 
//Encapsulated code - only limited things are shared

const names = require('./4-names_module')
console.log(names);

const sayHi = require('./5-utils')
//(only functions/variables set as exportable are accessible through importing the module)

sayHi('mahima')
sayHi(names.nirmal)
sayHi(names.sumi)