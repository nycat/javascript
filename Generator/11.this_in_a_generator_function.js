function *g() {
  yield 1
  this.hi = 'hi'
}

let i = g()
console.log(`i.hi: ${i.hi}`)
