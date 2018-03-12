/*
* AMD module standard, CommonJs module standard
* Compared with Amd and CommonJS module standard, the relationship bettween modules are defined when code compiled, while the relationship bettween modules in AMD or Commonjs standard are defined when code excuted.
* code mode is in 'use strict' by default in es6 module
*/

// 1. export modifiers
export let firstName = 'Betty'
export let lastName = 'Zhang'
export let birthday = '1990/11/14'



// equal way, recommended
/*
let firstName = 'Betty'
let lastName = 'Zhang'
let birthday = '1990/11/14'
export {
  firstName,
  lastName,
  birthday
}
*/

export function sayInfo(firstName = '', lastName = '', birthday = '1990/11/14') {
  console.log(`${firstName} ${lastName} born at ${birthday}`)
}

// the code before are valued as a module,  and there are three varibles and a function been exported


/**tips:
* export provides the varibles been exported, so 
*/
