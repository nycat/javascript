/* example 1:
  scope for default value:
  A new context created when there is a default value for a function. After declaration ended, the scope disappears.
*/
let x = 1
function log(x, y = x) {
  console.log(`x:${x}, y:${y}`)
}

log(12)
console.log(`x out of log function is: ${x}`)
