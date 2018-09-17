/* example 1: 
  variable value assignment in es5  
*/
let a10 = 10
let a11 = 11
let a12 = 12

console.log('a10, a11, a12')
console.log(a10, a11, a12)

/* example 2: 
  variable value assignment of array deconstruction way in es6
  the essence of array deconstruction assignment is pattern matching.
*/
let [a20, a21, a22] = [20, 21, 22]
console.log('a20, a21, a22')
console.log(a20, a21, a22)

/* example 3:
  value of varible not matched is undefined
*/
let [a30, a31, a32] = [20, 21]
console.log('a30, a31, a32')
console.log(a30, a31, a32)

/* example 4:
  partial matched
*/

let [a, [b], d] = [1, [2, 3], 4]
console.log('a, b, d')
console.log(a, b, d)

/* example 5:
  set default value for variable in array deconstruction
  For array deconstruction, it uses === to judge equal. So only the assigned value for variable is undefined,
  the default value for it works.
*/
let [a40, a41, a42 = 39] = [40, 41]
console.log(a40, a41, a42)

/* example 6:
  The case that the  defualt value is an expression
*/

function log (value) {
  console.log(`array deconstruction value is: ${value}`)
  return value
}

let [a51, a52, a53 = log(53)] = [51, 52]
console.log('a51, a52, a53')
console.log(a51, a52, a53)
