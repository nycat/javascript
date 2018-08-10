class Point {
  constructor (x, y) {
    this.x = x
    this.y = y
  }
}

class ColorPoint extends Point {
  constructor (x, y) {
    super(x, y)
  }
}

console.log(`Object.getPrototypeOf(ColorPoint) === Point: ${Object.getPrototypeOf(ColorPoint) === Point}`)