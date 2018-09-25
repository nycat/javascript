class Collection {
  *[Symbol.iterator]() {
    let i = 0
    while(this[i] !== undefined) {
      yield this[i]
      ++i
    }
  }
}

let myCollection = new Collection()
myCollection[0] = 1
myCollection[1] = 2

for(let value of myCollection) {
  console.log(value)
}
