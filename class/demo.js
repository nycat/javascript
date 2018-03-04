
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
    return '('+ this.x + ','+ this.y ')'
  }
}

// validate 
console.log(Point.prototype.constructor === Point)

var p = new Point(10, 10)