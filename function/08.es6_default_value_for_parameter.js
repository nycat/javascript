/* example 1:
  set default value for function in es6.
  Advantages for setting default value in es6:
    1. easy for code reading and using
    2. Removing the default value will not cause an error when it called outside.
*/
function getPoint(x = 0, y = 0) {
  // can't declare x again, it is because, for function, parameters stated by default.
  // let x = 0
  return {
    x,
    y
  }
}

let p1 = getPoint()
console.log(p1)

/* example 2
  set default value in es5
*/

function setPoint(x, y) {
  if (typeof x === 'undefined') {
    x = 0
  }
  if (typeof y === 'undefined') {
    y = 0
  }
  return {
    x: x,
    y: y
  }
}
let p2 = setPoint()
console.log(p2)


