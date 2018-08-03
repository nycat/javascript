/**
* Promise.prototype.catch is the alias of .then(null, rejection)
* will be called when some error happen
**/
const p1 = new Promise((resolve) => {
  return resolve('resolved data for p1!')
})

p1.then((data) => {
  console.log(data)
}).then(() => {
  throw new new Error('error')
}).catch(err => {
  /**
  * 1. always put a catch for a promise instance
  * 2. callback function for catch excuted when error happens or the status of a promise is rejected
  * 3. err is the error caused or the data been passed out for reject function of a promise instance
  **/
  console.log(`${err} get catched`)
})


const p2 = new Promise((resolve, reject) => {
  reject(new Error('error'))
})

// without catch callback, error can not be exposed
p2.then(() => {
  console.log('every thing is fine')
})

