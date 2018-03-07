/**
* Promise.prototype.then
**/
const p1 = new Promise((resolve, reject) => {
  resolve(1)
})

// p2 is a new Promise instance
const p2 = p1.then((data) => {
  console.log(data)
  return `data returned from p1's then callback function`
})
console.log(`p1 === p2: ${p1 === p2}`)

//param of p2's callback function comes from returned data from p1
p2.then((data)  => {
  console.log(data)
})