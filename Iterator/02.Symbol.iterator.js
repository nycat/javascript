const obj = {
  [Symbol.iterator]: function () {
    return {
      next: function () {
        return  {
          value: 1,
          done: true
        }
      }
    }
  }
}


let iterator = obj[Symbol.iterator]()
console.log(iterator.next())
