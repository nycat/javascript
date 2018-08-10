
/**
* how to create a class and a instance of class in es6
* class in es6 is a syntax sugarto creat class
*/

class Point {
  constructor (x, y) {
    this.x = x
    this.y = y
  }

  // without 'function' modifier 
  toString ()  {
    return '('+ this.x + ','+ this.y  + ')'
  }
}

/* equal to 
Point.prototype = {
  constructor () {},
  toString () {}
}
*/

// validate 
console.log(Point.prototype.constructor === Point)
console.log(Point.prototype.toString)
console.log(Point.prototype.constructor)

//  must use keyword `new` to create a new instance of a class in es6
var p = new Point(10, 10)
console.log(`p.constructor === Point.prototype.constructor: ${p.constructor === Point.prototype.constructor}`)
console.log(`p.constructor === Point: ${p.constructor === Point}`)

// explain keyword this
console.log(`p has own protoperty x:${p.hasOwnProperty('x')}`)
console.log(`p has own protoperty toString: ${p.hasOwnProperty('toString')}`)

// All the instances of a class share the same prototype object
var p2 = new Point(5, 5)
console.log(`p2.__proto__ === p2.__proto__: ${p1.__proto__ === p2.__proto__}`)

// Object.getPrototypeOf helps u to get the prototype Object of an object
console.log(Object.getPrototypeOf(p1))

