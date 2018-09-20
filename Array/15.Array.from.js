/* example 1:
  Convert an array-like object into an array in es5
*/
let arrayLike = {
  0: 'a',
  1: 'b',
  length: 2
}

let ary1 = [].slice.call(arrayLike, 0)

console.log('ary1:')
console.log(ary1)

/* example 2:
  Convert an array-like object into an array in es6
*/

let ary2 = Array.from(arrayLike)
console.log('ary2:')
console.log(ary2)

/* example 3:
  Created an array by Array.from. It's not deep copy.
*/

const cats = [{
  name: 'kido',
  age: 3
}, {
  name: 'maoqiu',
  age: 3
}, {
  name: 'xiaoxiao',
  age: 2
}]

let myCats = Array.from(cats)
console.log(`myCats === cats: ${myCats === cats}`)
console.log(`myCats[0] === cats[0]: ${myCats[0] === cats[0]}`)


/* example 4:
  Array.from(ary, callback, thisArg)
*/
const ary3 = [1, 2, 3, 4, 5, 6]
let oldNum = Array.from(ary3, (item) => {
  let value = item + '1'
  return Number(value)
})

console.log(oldNum)
