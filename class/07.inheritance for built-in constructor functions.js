/*
built in class in javascript
  Boolean()
  Number()
  String()
  Array()
  Date()
  Function()
  RegExp()
  Error()
  Object()
*/


function MyArray() {
  Array.apply(this, arguments);
}

MyArray.prototype = Object.create(Array.prototype, {
  constructor: {
    value: MyArray,
    writable: true,
    configurable: true,
    enumerable: true
  }
})

// In es5, the behavior of myArray class is completely inconsistent with Array.
// reason: sub class cant  get the inner property of built in class
// In es5, build sub instance first, then bind the properties of parent class to sub class instance.
var myArray = new MyArray(10)
console.log(myArray.length) //0


// In es6, the behavior of sub class  is completely consistent with built-in class.
class MyArray2 extends Array{
  constructor (...rest) {
    super(...rest)
    console.log('call constructor in myArray2')
  }
}

var myArray2 = (new MyArray2(10)).fill(1)
console.log(myArray2.length)
console.log(myArray2[9])



// difference in Object class
// reason: 上面代码中，NewObj继承了Object，但是无法通过super方法向父类Object传参。
// 这是因为 ES6 改变了Object构造函数的行为，一旦发现Object方法不是通过new Object()这种形式调用，ES6 规定Object构造函数会忽略参数。
class NewObj extends Object {
  constructor(){
    super(...arguments);
  }
}
var o = new NewObj({attr: true})
o.attr === true  // false

// usage: building your own class with built-in class
