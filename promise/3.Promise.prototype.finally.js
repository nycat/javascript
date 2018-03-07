/**
* finally callback function
**/

// extend finanlly callback for promise instance where es version is before es2018
Promise.prototype.finally = function(cb = () => {}){
  var P = this.constructor
  return this.then(
    value  => P.resolve(cb()).then(() => value),
    reason => P.resolve(cb()).then(() => { throw reason })
  )
}

new Promise((resolve) => {
  resolve(1)
}).then(() => {
}).catch((err) => {
  console.log(err)
}).finally(() => {
  // import as a standard in es2018
  console.log('always be called')
})

