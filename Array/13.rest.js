/* example 1:
  ... is a reversal operation for rest parameter.
  it converts an array into a parameter list.
*/
console.log(...[1,2,3])

/* example 2:
  ... works for array-like object too.
*/

function foo(x, y, z) {
  console.log(...arguments)
}

foo(11, 22, 33)

/* example 3
  rest, a replacement of apply for args pass
*/

// In es5
function foo1(x, y, z) {
  console.log(x, y, z)
}
var args1 = [0, 1, 2]
foo1.apply(null, args1)

// In es6
var args2 = [0, 1, 2]
foo1(...args2)

