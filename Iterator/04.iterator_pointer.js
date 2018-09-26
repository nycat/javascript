function Obj(value) {
  this.value = value
  this.next = null
}

Obj.prototype[Symbol.iterator] = function () {
  let iterator = { next: next }
  let current = this

  function next() {
    if (current) {
      let value = current.value
      current = current.next
      return {
        done: false,
        value: value
      }
    } else {
      return {
        done: true
      }
    }
  }
  return iterator
}

let one = new Obj(1)
let two = new Obj(2)
let three = new Obj(3)

one.next = two
two.next = three

for( var i of one) {
  console.log(i)
}
