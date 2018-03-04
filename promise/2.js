/**
* code excuted sequence
**/
function timeout (ms, flag) {
  console.log(0)
  return new Promise((resolve, reject) => {
    console.log(1)
    var t1 = setTimeout(() => {
      if (flag) {
        resolve(flag)
      } else {
        reject(flag)
      }
    }, ms)
  })
}

timeout(3 * 1000, true).then((data) => {
  // callback function for resolved status will be excuted after all the script of sync code excuted
  console.log('3 resolved with ' + data)
})

console.log(2)



/**
* the resolved/rejected data for a promise obeject can be another promise object
**/
const p1 = new Promise((resolve, reject) => {
  // resolve('resolved param for p1')
  reject('rejected param for p1')
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    //the resolved result is `rejected param for p1`
    resolve(p1)
  }, 1000)
})

p2.then(data => {
  console.log(data)
})