var ary = [1, 2, 3, 4, 5, 6]

function caculateSum(ary) {
  /*
    累积变量，默认为数组的第一个成员
    当前变量，默认为数组的第二个成员
    当前位置（从0开始）
    原数组
  */
  var sum = ary.reduce((a, b) => {
    return a + b
  })
  return sum
}

var sum = caculateSum(ary)
console.log(sum)
