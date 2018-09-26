var str = new String('hi')

try {
  [...str] // ["h", "i"]
} catch(e) {
  console.log(e)
}

str[Symbol.iterator] = function() {
  return {
    next: function() {
      if (this._first) {
        this._first = false
        return { value: 'bye', done: false }
      } else {
        return { done: true }
      }
    },
    _first: true
  }
}

console.log([...str]) // ["bye"]
console.log(str)
