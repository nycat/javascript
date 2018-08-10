// no variable promotion
try {
  new Foo ()
  class Foo {}
} catch (e) {
  console.log('no variable promotion for class defination')
}

//reason: parent class should be declared before sub class

{
  let Foo = class {}
  class Bar extends Foo {}
}