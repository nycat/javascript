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
// The reason is that sub class can't  get the inner property of the built in class.
// The deeper reason is, in es5, js engine builds sub instance first and binds the properties of parent class to sub class instance second.
var myArray = new MyArray(10)
console.log(myArray.length) //0


// The behavior of sub class  is completely consistent with built-in class.
// as  in es6, built parent class's instance first, then bind this to sub class's instance
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
