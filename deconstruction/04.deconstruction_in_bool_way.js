/* example 1:
  The rule for deconstruction is that if the given value to deconstrution is not an instance of Object, convert it into an instance of Object first.
*/
let {toString: s} = 123
console.log(s)

let {toString: hello} = true
console.log(hello)


/* example 2:
 As can transfer neither undefined nor null into an object,  deconstruction them occurs error. 
*/
try {
  let { prop: x } = undefined
  let { prop: y } = null
  console.log(x, y)
} catch (e) {
  console.log(e)
}
