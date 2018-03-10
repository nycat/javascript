function log (x, y) {
  // disadvantage what would happen if y is false
  // y = y || 'World'
  // an alternative way
  if(typeof y === undefined) {
    y = 'World'
  }
  console.log(x, y)
}
log(false, false)

