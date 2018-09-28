function *helloWorldGennerator () {
  yield 'hello'
  yield 'world'
  return 'ending'
}

// hw is an Iterator  Object
let hw = helloWorldGennerator()
let state1 = hw.next() // {value: 'hello', done: false }
console.log(state1)
let state2 = hw.next() // {value: 'world', done: false }
console.log(state2)
let state3 = hw.next() // {value: 'ending', done: true }
console.log(state3)
let state4 = hw.next() // {value: 'undefined', done: true }
console.log(state4)
