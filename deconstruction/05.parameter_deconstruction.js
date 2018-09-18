/* example 1.1:
*/
function add ([x, y]) {
  return x + y
}

const sum = add([1, 2])
console.log('add([1, 2]):', sum)


/* example 1.2:
*/ 
let value = [[1, 2], [3, 4]].map(([a, b]) => a + b)
console.log(value)

/* example 1.3
  set default value for parameter of a function
  parameter of function move is an object.
*/

function move({x = 0, y = 10} = {}) {
  console.log('move: [x, y]:', `[${x}, ${y}]`)
  return [x, y]
}

move()
move({
  x:22, 
  y: 33
})

/* example 4:
  an example different to example 3
*/

function move1({x, y} = {x: 10, y: 10}) {
  console.log('move1: [x, y]:', `[${x}, ${y}]`)
  return [x, y]
}

move1()
move1(22, 33)
