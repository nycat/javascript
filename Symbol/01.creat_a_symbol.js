/* example 1:
  Creating a Symbol
*/
let s1 = Symbol('hello')
console.log(typeof s1)
console.log(s1)


let s2 = Symbol('world')
console.log(typeof s2)
console.log(s2)

console.log(s2.toString())


let s31 = Symbol('1')
let s32 = Symbol('2')

console.log(`s31 === s32: ${s31 === s32}`)
