var it = makeIterator(['a', 'b'])

let a1 = it.next() // { value: "a", done: false }
let a2 = it.next() // { value: "b", done: false }
let a3 = it.next() // { value: undefined, done: true }

function makeIterator(array) {
  var nextIndex = 0
  var len = array.length
  return {
    next: function() {
      return nextIndex < len ?
        {value: array[nextIndex++], done: false} :
        {value: undefined, done: true}
    }
  }
}

console.log(a1, a2, a3)
