/* example 1:
import { compose } from 'redux';
  inner propeties for a function are areguments, this.
  The arguments is an array-like object, it has a property called callee, which is useful to recursive calling.
*/
function add(x, y) {
  // an array-like object
  console.log(arguments)
  console.log(arguments.callee)
  // console.log(this)
  return x + y
}

let sum = add(11, 22)

console.log(sum)

/* example 2:
  recursive calling
*/

function factorial (num) {
  if(num <= 1) {
    return 1
  }
  return num * arguments.callee(num-1)
}

let result = factorial(4)
console.log(result)
