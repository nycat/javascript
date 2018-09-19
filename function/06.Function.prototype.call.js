/* example 1:
  Function.prototype.call(thisArg, [[parameter1], [parameter2], ... [parametern]])
*/
function Product(name, price) {
  this.name = name
  this.price = price
}

function Food(name, price) {
  Product.apply(null, [name, price])
  this.category = 'food'
}

let cheese = new Food('cheese', 5)
console.dir(cheese)
