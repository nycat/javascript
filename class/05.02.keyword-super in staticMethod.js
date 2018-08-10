class Parent {
  static myMethod(msg) {
    console.log(3)
    console.log('static: myMethod', msg)
  }

  myMethod(msg) {
    console.log('myMethod', msg)
  }
}

class Child extends Parent {
  static myMethod(msg) {
    console.log(2)
    super.myMethod(msg)
  }

  myMethod(msg) {
    console.log(1)
    super.myMethod(msg)
  }
}

// call static method
Child.myMethod(1) // Parent static 1

var child = new Child()
// call instance method
child.myMethod(2) // Child static 2
