/* example 1:
  return mutilple value from a function
*/

function setPoint (x, y) {
  return {
    x,
    y
  }
}

/* example 2:
  set default value for parameter
*/
function setStartPoint({x = 10, y = 10} =  {}) {
  let point = setPoint(x, y)
  return Object.assign({...point}, { type: 'start'})
}

let point = setPoint(20, 20)
let startPoint = setStartPoint(point)
console.log(startPoint)


/* example 4:
  get specified variables from libs
*/
const { SourceMapConsumer, SourceNode } = require("source-map")
