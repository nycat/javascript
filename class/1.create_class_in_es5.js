/**
* how to create a class and a instance of class in es5
* cons: novice might be confused with gramma
*/
function Point (x, y) {
  // this is returned by default
  this.x = x
  this.y = y
}

Point.prototype.toString= function(){
  return '('+ this.x + ','+ this.y + ')'
}

var p = new Point(10, 10)
console.log(Point.prototype.constructor === Point)
console.log(p.constructor === Point.prototype.constructor)

// p2 is undefined
var p2 = Point(12, 12)
try {
  console.log(p2, p2.constructor)
} catch (e) {
  console.log(e)
}

