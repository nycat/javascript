/* example 1:
  clone ary in es5
*/
const a10 = [1,2]
const a20 = a10

// both a1 and a2 point to the same address
console.log(`1. a10 === a20: ${a10 === a20}`)

const a30 = a10.concat()
console.log(`2. a30 === a10: ${a30 === a10}`)
console.log('a30')
console.log(...a30)

/* example 2:
  clone ary in es6
*/
const a41 = [1, 2]
const a42 = [...a41]
const [...a43] = a41

console.log(`3. a41 === a42 :${a41 === a42}`)
console.log('a42:')
console.log(...a42)

console.log(`4. a43 === a41 : ${a43 === a41}`)
