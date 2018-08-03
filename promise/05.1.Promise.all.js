const p1 = new Promise(resolve => resolve(1))
// rejected status for p2 is not catched
const p2 = new Promise((resolve, reject) => reject(2)).catch(e => {
  return e
})
const p3 = new Promise(resolve => resolve(3))

const p = Promise.all([p1, p2, p3])

// if all the promise instance resolved, then callback will be excuted
p.then((data) => {
  console.log('all the promise resolved!')
  // all the resolved data integrated as an array, which is passed in as a param to then callback
  console.log(...data, data)
}).catch(e => {
  // first rejected data been returned as a param for catch callback
  console.log(e)
})


