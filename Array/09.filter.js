const ary = [1, 2, 3, 4, 5]

const oldvalue = ary.filter(item => {
  return (item % 2)
})

console.log('old numbers are: ' + oldvalue.join(', '))
