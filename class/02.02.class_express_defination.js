// define a class called Me
const Myclass = class Me {
  getClassName () {
    // Me can only get accessed inner Me
    return Me.name
  }
}

// created an instance imediatelly by class expression defination
let person = new class {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
}('张三')

person.sayName()