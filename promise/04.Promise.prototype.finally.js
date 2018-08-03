/**
* finally callback function
**/

// a pollify for  Promise.prototype.finnaly bellow es2018 standard
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
  // imported in es2018 standard
  console.log('always be called')
})

