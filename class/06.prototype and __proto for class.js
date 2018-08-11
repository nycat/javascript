class A { }

// Every class has a prototype object. As A is an object, so it has a __proto__ also.
// Compared with other type of object, the __proto__ of a class points to Function
console.log(A.prototype, 'and', A.__proto__)


class B extends A { }


// B.prototype is a prototype for class B, B.prototype.__proto__ points to A.prototype
console.log(B.prototype, B.prototype.__proto__ === A.prototype)

// The reason is 
class A1 {
  constructor () {
    console.log('call A1 constructor')
  }
  logInfo () {
    console.log('info')
  }
}

class B1 {
  constructor () {
    console.log('call B1 constructor')
  }
}

// instance of class B1 inheritants A1's instance
Object.setPrototypeOf(B1.prototype, A1.prototype);

const b = new B1()
b.logInfo()
console.log(`b.__proto__.__proto__ === A1.prototype: ${b.__proto__.__proto__ === A1.prototype}`)
console.log(`b.__proto__ === B1.prototype: ${b.__proto__ === B1.prototype}`)
