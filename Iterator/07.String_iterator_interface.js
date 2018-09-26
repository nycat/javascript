var someString = 'hi'
console.log(typeof someString[Symbol.iterator])// "function"

var iterator = someString[Symbol.iterator]()

iterator.next()  // { value: "h", done: false }
iterator.next()  // { value: "i", done: false }
iterator.next()
