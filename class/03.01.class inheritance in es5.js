function Point (x, y) {
  this.x = x
  this.y = y
}

Point.prototype = {
  constructor: Point,
  logPosition: function () {
    console.log('('+ this.x + ',' + this.y + ')')
  },
  logClassName: function () {
    console.log('Point')
  }
}

function ColorPoint (x, y, color) {
  // Point.call(this, x, y)
  // creat instance of sub class before binding parent class's properties on this
  Point.apply(this, [x,y])
}

ColorPoint.prototype = Object.assign(Point.prototype, {
  constructor: ColorPoint,
  logClassName: function () {
    console.log('ColorPoint')
  }
})

var p1 = new Point(10, 10)

var colorP1 = new ColorPoint(10, 10, 'red')
colorP1.logClassName()
colorP1.logPosition()