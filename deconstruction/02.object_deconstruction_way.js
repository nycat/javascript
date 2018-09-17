/* example 1:
  variable's name must be consistent with the key of the given object
  the value of variable not matched  is undefined 
*/
let { foo, bar, baz } = { foo: 'aaa', bar: 'bbb' }
console.log('foo, bar, baz')
console.log(foo, bar, baz)

/* example 2:
 The case that variable's name is not consistent with the key of the given object 
*/
let { first: f, last: l } = { first: 'hello', last: 'world' }
console.log('f, l')
console.log(f, l)

/* example 3:
  The mechanism for object desconstruction is finding the key which is consistent with the variable want
be assigned first, then assign the value to the variable second.
*/
let { foo1: baz2 } = { foo1: 'aaa', bar: 'bbb' }
console.log(baz2) // "aaa"
console.log(foo) // error: foo is not defined

