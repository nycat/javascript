
class RangeIterator {
  constructor(start, end) {
    this.value = start
    this.stop = end
  }

  [Symbol.iterator] () {
    return this
  }

  next () {
    let value = this.value
    if(value < this.stop) {
      this.value++
      return {
        value,
        done: false
      }
    }
    return {
      done: true,
      value: undefined
    }
  }
}

function range(start, stop) {
  return new RangeIterator(start, stop)
}

for (let value of range(0, 3)) {
  console.log(value)
}
