function *g() {
  yield 1
}
g.prototype.hi = 'hi'

let i = g()
console.log(`i instanceof g: ${i instanceof g}`) //true
console.log(`i.hi: ${i.hi}`)
