var x = 1
function foo(x, y = function() { x = 2 }) {
  var x = 3
  y()
  console.log(x)
}

foo() // 3
console.log(x) // 1

/* explain
  step1:  a context created, there are x and foo in it. We call this context context1;
  step2: foo(), a new context created as there is a default value for parameter y in foo declaration. we call this context context2.
    there are x, and y in context2;
  step3: excute foo there will a context for foo excutation. We call this context context3.

  If you're in a function then var will create a local variable, "no var" will look up the scope chain until it finds the variable or
  hits the global scope (at which point it will create it)
*/
