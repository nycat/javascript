var proto = {
  saySth: function (sth) {
    console.log(sth)
    return sth
  },
  sayHi: function () {
    var sth = 'Hi'
    console.log(sth)
    return sth
  }
}

// Object.create(proto, [propertiesObject])
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties
// Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。 
var ppl = Object.create(proto)
console.log(ppl.__proto__ === proto)

// application

function Shape (name) {
  this.name = name
}

Shape.prototype = {
  sayName: function () {
    console.log(this.name)
  }
}

// inherit property from shape
function Rectangle () {}
Object.create(Rectangle.prototype, Shape.prototype)
