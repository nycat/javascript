/**
* no varible elvation in es6
* block scope for es6
* no repeated decleration for varible
* not re-decleration for params
**/
console.log(b) // undefined
console.log(a) //ReferenceError: a is not defined
{
  let a = 10
  var b = 1
}
try {
  console.log(a, b)
} catch(e) {
  // console.log(e)
}


function foo(varible) {
  // no repeat decleration for varible
  let a = 10
  //  not re-decleration for params
  let varible = 10
  var a = 10
}

console.log(foo)
