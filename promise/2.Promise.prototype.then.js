/*
* return promise instance in callback function
*/

const p1 = new Promise((resolve, reject) => {
  console.log(1)
  resolve()
})
const p2 = new Promise(resolve => {
  console.log(2)
  setTimeout(() => {
    resolve()
  }, 3 * 1000)
})

p1.then(() => {
  return p2
}).then(() => {
  // callback excuted after p4 resolved
  console.log('done')
})

