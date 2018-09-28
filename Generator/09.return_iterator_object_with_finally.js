function* numbers () {
  yield 1
  try {
    yield 2
    yield 3
  } finally {
    yield 4
    yield 5
  }
  yield 6
}
var g = numbers()
console.log(g.next()) // { value: 1, done: false }
console.log(g.next()) // { value: 2, done: false }
console.log(g.return(7)) // { value: 4, done: false }
console.log(g.next()) // { value: 5, done: false }
console.log(g.next()) // { value: 7, done: true }
