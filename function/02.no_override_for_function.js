function add (...rest) {
  let sum = 0
  rest.forEach(item => {
    sum += item
  })
  return sum
}

let sum = add(1,2,3,4,5)
console.log(sum)


function add(x, y) {
  return x + y + 30
}

let sum2 = add(10, 20)
console.log(sum2)
