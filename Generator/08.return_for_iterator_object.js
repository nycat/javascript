function *g() {
  yield 1
  yield 2
  yield 3
}

let iterator = g()
console.log(iterator.next()) // { value: 1, done： false }
console.log(iterator.next()) // { value: 2, done： false }
console.log(iterator.return(9)) // { value: undefined, done： true }
console.log(iterator.next())
