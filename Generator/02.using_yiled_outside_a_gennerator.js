try {
  function f() {
    yield 1
  }
  f()
} catch (e) {
  console.log(e)
}
