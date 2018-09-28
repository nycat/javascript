# Application of Generator function in Asynchronous programming

## 1. traditional asynchrous programing in javascript

Before ES6 standard, there are four solutions of asynchronous programming in javascript:

- callback function
- event listening
- publish/subscriber
- Promise

Bying introducing of Generation function, javascript asynchronous programming enters in a brand new stage.

## 2. Basic concepts

### 2.1 What is async and sync

### 2.2 Callack function

A sample code of callback function:

```javascript
const fs = require('fs')

fs.readFile('/etc/password', 'utf-8', function (err, data) {
  if(err) throw err
  console.log)data
})
```

Problem:  callback hell.

### 2.3 Promise

Promise aims at solving *callback hell**. It's not a brand new functional, its a new javascript grammar which transfers nested callback into a chainable function.

Promise helps u to transfer the following code

```javascript
fs.readFile(fileA, 'utf-8', function (err, data) {
  fs.readFile(fileB, 'utf-8', function (err, data) {
    // ...
  })
})
```

into

```javascript
var readFile = require('fs-readfile-promise');

readFile(fileA)
.then(function (data) {
  console.log(data.toString());
})
.then(function () {
  return readFile(fileB);
})
.then(function (data) {
  console.log(data.toString());
})
.catch(function (err) {
  console.log(err)
})
```

### 2.3 Generator function

The Generator function can pause and recover code execution flow, that's why the Generator function can be used as a solution to encapsulate asynchronous code.

## 3. Application of Generator function

### 3.1 Transfer an asynchronous operation into a synchronous way

```javascript
function *loadUI() {
  showLoadingScreen()
  yield loadUIDataAsynchronousely()
  hideLoadingScreen()
}

var loader = loadUI()
loader.next()
loader.next()

```

### 3.2 install Iterator Interface to an object

```javascript
function* iterEntries(obj) {
  let keys = Object.keys(obj);
  for (let i=0; i < keys.length; i++) {
    let key = keys[i];
    yield [key, obj[key]];
  }
}

let myObj = { foo: 3, bar: 7 };

for (let [key, value] of iterEntries(myObj)) {
  console.log(key, value)
}
```
