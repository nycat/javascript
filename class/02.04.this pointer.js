class Logger1 {
  printName(name = 'there') {
    this.print(`Hello ${name}`);
  }

  print(text) {
    console.log(text);
  }
}

const logger = new Logger1()
// let { printName } = logger

try {
  // Will Cause error. As in the printName function, this points to current excuttion environment
  printName()
} catch (e) {
  // console.log(e)
}

// solution1： bind this

class Logger2 {
  constructor () {
    this.printName = this.printName.bind(this)
  }

  printName (name = 'there') {
    console.log('hello, world')
  }

  print (text) {
    console.log(text);
  }
}

const logger2 = new Logger2()
let { printName } = logger

try {
  printName()
} catch (e) {
  console.log(e)
}

// solution2: using arra function


class Logger3 {
  printName(name = 'there') {
    this.print(`Hello ${name}`);
  }

  print(text) {
    console.log(text);
  }
}