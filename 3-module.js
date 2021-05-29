//Modules 
//Encapsulated code - only limited things are shared

const names = require('./4-names_module')
console.log(names);

require('./7-mind_grenade')

const sayHi = require('./5-utils')
//(only functions/variables set as exportable are accessible through importing the module)

const chicken_beak = require('./6-alternate-flavour')


sayHi('mahima')
sayHi(names.nirmal)
sayHi(names.sumi)