/**
* Promise.prototype.then
**/

console.dir(Promise.prototype.then)

const p1 = new Promise((resolve) => {
  resolve(1)
})

// p2 is a new Promise instance
const p2 = p1.then((data) => {
  console.log(data)
  return 'data returned from resolved callback of p1'
})
console.log(`p1 === p2: ${p1 === p2}`)

//param of p2's callback function comes from returned data from p1
p2.then((data)  => {
  console.log(data)
  return data
}).then( data => {
  console.log('')
})

console.log(p2.__proto__.then)