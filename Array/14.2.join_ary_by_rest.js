const ar1 = [1, 2, {name: 'kido'}]
const ar2 = [3, 4, {name: 'maoqiu'}]

// es5 solution
const ar3 = ar1.concat(ar2)
console.log(ar3)

// es6 solution
const ar4 = [...ar1, ...ar2]
console.log(ar4)

// both solutions are not deep coping
ar4[2].name = 'xiaoxiao'
console.log(ar1[2].name)
