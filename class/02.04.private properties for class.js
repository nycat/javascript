// for class of es6, there is no private function or variable
// private function/demand can be implemented by simulation


class Widget {
  foo (baz) {
    this._bar.call(this, baz)
  }

  // indicate _bar is a private function for class Widget
  _bar (someone) {
    console.log(someone)
  }
}

const widet = new Widget()


widet.foo('access by foo')
// _bar function can be accessd by Widget instance outside class Widget.
widet._bar('access by _bar')


// possible solutions for private property/function for a Class instance

// 1. remove all the supposed private functions outside class decarelation body

// 2. Using Symbol
const saySth = Symbol('saySth')

const sb = new class Person {
  foo (sth) {
    this[saySth](sth)
  }

  [saySth] (sth) {
    console.log(sth)
  }
} ()

sb.foo('hello')

try {
  sb.saySth()
} catch(e) {
  console.log(e)
}
