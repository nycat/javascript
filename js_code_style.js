// javascript code style from airbnb: https://github.com/airbnb/javascript
// 1. always use let instead of var
if (true) {
  let x = 'hello world'
  console.log(x)
}

for (let i = 0; i < 10; i++) {
  console.log(i)
}

/**
* 2. glolbal constant and process security
* Between let and const, const is recommended first
**/
// bad
// var a = 1, b = 2, c = 3

// good
const a = 1
const b = 2
const c = 3

// best 
// const [a, b, c] = [1, 2, 3]

console.log(a, b, c)


// 3. use apostrophe instead of double quotes
let name = 'betty'
let age = 26
console.log(`name: ${name}, age: ${age}`)


// 4. use destructuring
// 4.1 destructure for arrary 

// good
const arr = [1, 2]
let [num, priority] = arr
console.log(num, priority)

// bad
num =  arr[0]
priority = arr[1]

// 4.2 Use destructuring is recmmonned if the param for a function is a object
/*function getFullName (user) {
  // bad
  // const firstName = user.firstName
  // const lastName = user.lastName

  // good
  const {firstName, lastName} = user
  return `${firstName}, ${lastName}`
}*/

// best
function getFullName({firstName, lastName}) {
  return `${firstName}, ${lastName}`
}

getFullName({firstName: 'betty', lastName: 'Zhang'})

// 4.3 
function processInput (input) {
  // bad
  // return [left, right, top, bottom]

  // good
  let {left, right, top, bottom} = input
  return {left, right, top, bottom}
}

const {left, right} = processInput({left: 10, top: 10, right: 10, bottom:10})
console.log(left, right)

// 5.1 use expand modifier to copy an array
const ary = [1, 2, 3]
const itemCopy = [...ary]
console.log(itemCopy)

// 5.2 conver an arry-like  object to an arry
const foo = document.querySelectorAll('.foo')
const nodes = Array.from(foo)
console.log(nodes)

// 6 use Arrow function 
new Promise(resolve => {
  resolve(1)
}).then(data => {
  return data * data
}).then(data => {
  console.log(data)
})



