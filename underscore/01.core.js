(function () {
  // get root
  var root = typeof self == 'object' && self.self === self && self ||
  typeof global == 'object' && global.global === global && global ||
  this ||
  {}
  // bind _ to root
  var previousUnderscore = root._
  
  // AMD registrattion
  if (typeof define == 'function' && define.amd) {
    define('underscore', [], function() {
      return _
    })
  }
})()
