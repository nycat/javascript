/**
* how to create a class and a instance of class in es5
* cons: novice might be confused with gramma
*/

function Point (x, y) {
  this.x = x
  this.y = y
}

Point.prototype.toString= function(){
  return '('+ this.x + ','+ this.y + ')'
}

var p = new Point(10, 10)

console.log(Point.protypoe.constructor === Point)