class Point {
  constructor (x, y) {
    this.x = x
    this.y = y
  }
}

class ColorPoint extends Point {
  constructor (x, y, color) {
    super(x, y)
    this.color = color
  }
}

// get ColorPoint's parent class
console.log(`Object.getPrototypeOf(ColorPoint) === Point: ${Object.getPrototypeOf(ColorPoint) === Point}`)


// get prototype of an instance
const cPoint = new ColorPoint(10, 10, 'red')
console.log(Object.getPrototypeOf(cPoint))
