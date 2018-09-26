let myIterable = {
  [Symbol.iterator]: function* () {
    yield 1
    yield 2
    yield 3
  }
}
[...myIterable] // [1, 2, 3]


let obj = {
  * [Symbol.iterator]() {
    yield 'hello'
    yield 'world'
  }
}

for (let x of obj) {
  console.log(x)
}