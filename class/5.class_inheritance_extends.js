class Point {
   constructor(x, y) {
    this.x = x
    this.y = y
  }

  toString() {
    console.log(`(${this.x}, ${this.y})`)
  }
}



/**
* create a new Class inherits from Point
* keyword: `extends`
**/
class ColorPoint extends Point {

  /**
  * constructor is set by default if lost constructor function
  **/
  constructor (x, y, color) {
    /** Use constructor of paretn class by keyword super
    * must use keyword 'super' as the child class do not have this keyword, otherwise will meet error
    * keyword `super` must be before keyword this
    **/
    super(x, y)
    this.color = color
  }

  toString() {
    return this.color + super.toString()
  }
}

var cPoint = new ColorPoint(10, 10, 'red')

console.log(`cPoint is instanceof ColorPoint: ${cPoint instanceof ColorPoint}`)
console.log(`cPoint is instanceof Point: ${cPoint instanceof Point}`)


/**
* how to get the parent class of a class Object
**/

console.log(`Object.getPrototypeOf(ColorPoint) === Point: ${Object.getPrototypeOf(ColorPoint) === Point}`)


