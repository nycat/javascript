// 1. Using super to call function
class A {
  constructor () {
    console.log(`I'm a constructor`)
  }
}

class B extends A {
  constructor () {
    // calling super is a must in for a sub class's constructor declaration
    super()
  }
}

const oB = new B()


// 2. super points to parent's class's prototype object when it used as an object

class C {
  static  staticMethod () {
    super
  }
  constructor (name = `I'm an instanceof class C`) {
    this.name = name
  }
  log () {
    return `I'm a log`
  }
}

class D extends C {
  static staticMethod () {
    super.staticMethod()
  }
  constructor () {
    super()
    // super points to parent class's prototype object
    console.log(super.log())
    // can not visit super.name as it's defined on Parent class's instance
    console.log(super.name)
  }
}

var d = new D()

// all this reason is beacuse inner super, this points to sub class's instance

