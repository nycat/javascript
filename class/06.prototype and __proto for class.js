class A { }

// Every class has a prototype property. As A is an object, so it has a __proto__ also.
// Compared with other type of object, the __proto__ of a class points to Function
console.log(A.prototype, 'and', A.__proto__)


class B extends A { }


// B.prototype is a prototype for class B, B.prototype.__proto__ points to A.prototype
console.log(B.prototype, B.prototype.__proto__ === A.prototype)

// The reason is 
class A1 {
}

class B1 {
}

// instance of class B1 inheritants A1's instance
Object.setPrototypeOf(B1.prototype, A1.prototype);

// B1 继承 A1 的静态属性
Object.setPrototypeOf(B, A);

const b = new B1()