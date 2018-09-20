/* example 1:
  deconstruction with rest calculator.
  Catution: rest calculator must be put at the end
*/
const [first, ...others] = [1, 2, 3, 4, 5]
console.log(`first: ${first}`)
console.log(`others: ${others}`)
