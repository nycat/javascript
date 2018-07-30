var ppl = {}
Object.defineProperty(ppl, 'name', {
  value: 'alice',
  writable: true, // value can be changed, default to false
  enumerable: true, //key can be found in for in cirulation or Object.keys
  configurable: false, // default to false, if is true, this property can be deleted,
})


// console.log(ppl.name)

// delete ppl.name
// console.log(ppl.name)

// ppl.name = 'deby'
// console.log(ppl.name)

// Object.keys(ppl).forEach((key) => {
//   console.log(key)
// })

// set and get
var cat = {
  name: 'kido'
}

Object.defineProperty(cat, 'called', {
  set (val) {
    called = val
    console.log(`set called to ${val}`)
  },
  get () {
    console.log('call cats called')
    return called
  }
})

console.log(cat)
cat.called = 1
console.log(cat.called)

// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty