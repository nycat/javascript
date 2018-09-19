/* example 1:
  Decalare a function and assign the function memory address to add
*/
let sum = add(1,2,4)
console.log(sum)

function add(...rest) {
  let sum = 0
  rest.forEach(item => {
    sum += item
  })
  return sum
}

try {
  sayHello()
} catch(e) {
  console.log(e)
}

var sayHello = () => {
  console.log('hello')
}
