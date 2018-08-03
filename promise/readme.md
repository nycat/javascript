# Promise
The original guide can be found at: http://es6.ruanyifeng.com/#docs/promise. <br>

Compared with the traditional solutions, callback function and event, Promise is a powerful solution for async programming in javascript language. Right now, it's a feature of ES2015 and original supported as a Promise Object. <br> <br>

## Promise.prototype.then
A new Promise project is returned in a callback of a then function. <br><br>


## Promise.prototye.catch
**Promise.prototye.catch** is the alias of *.then(null, rejection)*.  
Always put a catch callback for a promise object to catch possible inner bug or errors. <br><br>


## Promise.prototype.finally
Promise.prototype.finally is imported in es2018 standard. Callback function for finnaly does not accept pararm.

```javascript
server.listen(port)
  .then(() => {
  //
  })
  .finally(server.stop)
```
<br>

A pollify for Promise which is before es2018 standard.

```javascript
// polify code
Promise.prototype.finally = function(cb = () => {}){
  var P = this.constructor
  return this.then(
    value  => P.resolve(cb()).then(() => value),
    reason => P.resolve(cb()).then(() => { throw reason })
  )
}

// test code
new Promise((resolve) => {
  resolve(1)
}).then(() => {
}).catch((err) => {
  console.log(err)
}).finally(() => {
  // imported in es2018 standard
  console.log('always be called')
})
```
<br><br>

## Promise.prototype.all
<br><br>


## Promise.resolve and Promise.reject
Sometimes, we may need to convert a data to a Promise object. **Promise.resolve** can take over this demand.

```javascript
cons admin = {name: 'admin'}
const adminPromise = Promise.resolve(admin)

adminPromise
  .then(data => {
    console.log(data)
  })
  .catch(e => {
    console.log(e)
  })
```
<br>

*Promise.resovle* equals to
```javascript
Promise.resolve(data) 
// equals to
new Promise(resolve => {
  resolve(data)
})
```
<br>

## Applications





