
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

// validate 
console.log(Point.prototype.constructor === Point)
console.log(Point.prototype.toString)
console.log(Point.prototype.constructor)

//  must use keyword `new` to construct a new instance
var p = new Point(10, 10)
console.log(`p.constructor === Point.prototype.constructor: ${p.constructor === Point.prototype.constructor}`)
console.log(`p.constructor === Point: ${p.constructor === Point}`)

// explain keyword this
console.log(`p has own protoperty x:${p.hasOwnProperty('x')}`)
console.log(`p has own protoperty toString: ${p.hasOwnProperty('toString')}`)

// The prototype object owned by its all the instance object
var p2 = new Point(5, 5)
console.log(`p2.__proto__ === p2.__proto__: ${p2.__proto__ === p2.__proto__}`)

