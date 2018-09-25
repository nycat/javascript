const obj = {
  toString() {
    return 'abc'
  }
}
const sym = Symbol(obj)
console.log(sym.toString()) 
