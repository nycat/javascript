// 1. Get the prototype object of a instance
class Point {}
const p = new Point()
console.log(Object.getPrototypeOf(p))


// 2. get parent class of a class

class ColorPoint extends Point {
}
console.log(`Object.getPrototypeOf(ColorPoint) === Point: ${Object.getPrototypeOf(ColorPoint) === Point}`)