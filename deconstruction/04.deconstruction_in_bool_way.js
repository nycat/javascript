/* example 1:
  The rule for deconstruction is that if the given value to deconstrution is not an instance of Object, convert it into an instance of Object first.
*/
let {toString: s} = 123
console.log(s)

let {toString: hello} = true
console.log(hello)

