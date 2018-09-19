/* example 1:
  If there is only one line code in the function body, the bracket can be omitted
*/
const sayHi = () => console.log('Hi')
sayHi()


/* example 2:
  For the case that returning an object, function body should be wrapped with bracket.
*/
const getP = (x = 0, y=0) => {
  return {
    x,
    y
  }
}

const p = getP()
console.log(p)


/* exanple 3:
  1. In array function, this points to the object where you define it
  2. Can not be used as constructor
  3. The arguments variable does not exist in array function
  4. can not be used as gennerator function
*/
