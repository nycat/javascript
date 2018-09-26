let set = new Set().add('a').add('b').add('c')
let [x, y] = set

let [first, ...rest] = set
console.log(x, y, first, rest)
