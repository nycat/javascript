// 1. Using super to call parent class's constructor function
class A {
  constructor () {
    console.log(`I'm a constructor for class A`)
  }
}

class B extends A {
  constructor () {
    // calling super is a must in for a sub class's constructor declaration
    // For sub class‘s constructor, in the inner of super funtion, keyword this points to sub class's instance
    super()
    console.log(`I'm a constructor for class B`)
  }
}

const oB = new B()


// 2. Being used as an object in sub class's function, keyword super points to parent's class's prototype object
class C {
  constructor (name = `I'm an instanceof class C`) {
    this.name = name
  }
  log () {
    return `I'm a log in class C`
  }
}

class D extends C {
  constructor (name = `I'm an instanceof class D`) {
    super(name)
    // super points to parent class's prototype object
    console.log(super.log())
    // can not visit super.name as it's defined on Parent class's instance
    console.log(super.name)
  }
}

var d = new D()

// 

