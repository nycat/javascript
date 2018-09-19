/* example 1:
  scope for default value:
  When there is a default value for a function, there will be a newly created context, which will disappear when variable declaration ended.
  This grammar behavior only exists when there is a default value for a parameter in a function declaration.
*/
let x = 1
function log(x, y = x) {
  console.log(`x:${x}, y:${y}`)
}

log(12)
console.log(`x out of log function is: ${x}`)


/*
  For a function which has a default value of a parameter,  javascript engine creates a new context for its parameter.
  As there is no x in the context created for parameter of foo, javascript engines looks it up to upper layer of the newly created context.
*/
function foo(y = x) {
  console.log(`y is:${y}`)
}
foo()
