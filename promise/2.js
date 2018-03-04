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

