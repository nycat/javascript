const p1 = new Promise((resolve, reject) => {
  var t1 = setTimeout(() => {
    reject('rejected from p1')
    clearTimeout(t1)
    t1 = null
  }, 3 * 1000)
})

const p2 = new Promise((resolve, reject) => {
  var t2 = setTimeout(() => {
    reject(p1)
    clearTimeout(t2)
    t2 = null
  }, 1 * 1000)
})

p2.then((data) => {
  console.log(`data: ${data}`)
  // how to catch erros in catch callback function
}).catch(e => {
  // catch reject from p2
  return e
}).catch(e => {
  // catch reject from p1
  console.log(e)
})

/** code tips:
* 1. put return before reject/resolve to avoid redundant code
* 2. awalys have catch callback function
**/

