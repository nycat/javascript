/* example 1:
  fn.bind(thisArg) returns a new function whose inner property, this, points to thisArg. 
*/
function Product (name, price) {
  this.name = name
  this.price = price
}

function logProductInfo() {
  console.log(`product: ${this.name}, price: ${this.price}`)
}

let tomato = new Product('tomato', '1$')
tomato.logInfo = logProductInfo.bind(tomato)
tomato.logInfo()
