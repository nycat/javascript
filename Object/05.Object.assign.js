var p1 = {
  x: 10,
  y: 10
}

var p2 = {
  x: 20,
  y: 20,
  z: 30
}

var p = Object.assign({name: 'p'}, p1, p2)

console.log(p)