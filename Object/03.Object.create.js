var proto = {
  saySth: function (sth) {
    console.log(sth)
  },
  sayHi: function () {
    var sth = 'Hi'
    console.log(sth)
  }
}

// Object.create(proto, [propertiesObject])
// https://msdn.microsoft.com/zh-cn/library/ff925952(v=vs.94).aspx
/*
 * prototype: 必需。  要用作原型的对象。  可以为 null。
*/
var ppl = Object.create(proto)
console.log(`ppl.__proto__ === proto: ${ppl.__proto__ === proto}`)
console.log(ppl.sayHi())

var somebody = Object.create(null)
console.log(`somebody.__proto__: ${somebody.__proto__}`)


// ES5 inheritance

function Shape (x, y) {
  this.x = x
  this.y = y
}

Shape.prototype = {
  move: function (x, y) {
    this.x += x
    this.y += y
    var name = this.name || ''
    console.log(`${name} moved (${x}, ${y})`)
  },
  constructor: Shape
}

function Rectangle (x, y) {
  Shape.call(this, x, y)
  this.name = 'Rectangle'
}

Rectangle.prototype = Object.create(Shape.prototype)
Rectangle.prototype.constructor = Rectangle

console.log(`Rectangle.prototype.__proto__ === Shape.prototype: ${Rectangle.prototype.__proto__ === Shape.prototype}`)

var rect = new Rectangle(10, 10)
console.log(rect)
rect.move(10, 20)
