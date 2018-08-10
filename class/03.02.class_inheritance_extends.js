class Point {
   constructor(x, y) {
    this.x = x
    this.y = y
  }

  logPosition() {
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
    * creating instance of parent class first, operate  instance of sub class later.
    **/
    super(x, y)
    this.color = color
  }

  logPosition() {
    // super: must call super if the subinstance wants to use parent class's function
    super.toString()
  }
}

var cPoint = new ColorPoint(10, 10, 'red')

console.log(`cPoint is instanceof ColorPoint: ${cPoint instanceof ColorPoint}`)
console.log(`cPoint is instanceof Point: ${cPoint instanceof Point}`)


// ColorPoint.prototype is not equal to Point.prototype
console.log(`ColorPoint.prototype === Point.prototype: ${ColorPoint.prototype === Point.prototype}`)

