/**

**/

/**
*
* three status of Promise object
* 1: pending
* 2: fulfilled (resolved)
* 3: rejected (resolved)
* Once the status of a promise object settled, nothing can change its status.
* Compared with event solution,u can also add a callback on a promise Object and get the resolved status even if its status is resolved.
**/

/** Basic usage
*  Both resolve and reject are function, and they are installed by javascript engine
**/

const promise  = new Promise((resolve, reject) => {
  this.name = 'promise'
  console.log(`${this.name} object created at ${(new Date()).toString()}`)
  var res = 4 % 3
  var t1 = setTimeout(() => {
    if (res) {
      resolve(res)
    } else {
      reject(res)
    }
    clearTimeout(t1)
    t1 = null
  }, 3 * 1000)
})

/** 
* set callback function for resolved and rejected status
* rejected callback function is optional
* data of callback function is the copy of  resolve's/reject's param
*/
promise.then((data) => {
  console.log(`resolved with ${data}`)
}, (data) => {
  console.log(`rejected with ${data}`)
})

console.log('hi')

