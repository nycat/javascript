/*example 1:
  A key that is symbol can not be accessed by for..of
*/
let d1 = Symbol('departmentFirst')
let d2 = Symbol('departmentSecond')
const departments = {
  [d1]: {
    name: 'IT'
  },
  [d2]: {
    name: 'Marketing'
  },
  [3]: {
    name: 'Office'
  }
}

for (let key in departments) {
  console.log(departments[key])
}


/* example 2:
  Get key that are a symbol by Object.getOwnPropertySymbols
*/
let c1 = Symbol('c1')
let c2 = Symbol('c2')
let c3 = Symbol('c3')

let cats = {
  [c1]: {
    name: 'kido'
  },
  [c2]: {
    name: 'maoqiu'
  },
  [c3]: {
    name: 'xiaoxiao'
  }
}

let keys = Object.getOwnPropertySymbols(cats)
console.log(keys)

