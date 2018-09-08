const ary1 = [1,2,3,4,5,6,7]

const tmp = ary1.splice(1, 10, [1,1,1,1,1,1,null,11])

console.log(`tmp: ${tmp.join(',')}`)
console.log(`ary1:${ary1.join(', ')}`)

