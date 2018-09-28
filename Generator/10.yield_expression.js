function *f() {
  yield 1
  yield 2
}

function *b() {
  yield 3
  yield *f()
  yield 4
}

for (let v of b()) {
  console.log(v)
}
