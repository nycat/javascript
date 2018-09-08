const pets = ['kido', 'maoqiu', 'xiaoxiao']

console.log('my pets are' + pets.join(', ') + ' and yujia.')

// if one of the item is null or undefined, the value of it will be shift into an empty string
const arrayWithEmptyValue = ['kido', 'maoqiu', null, 'xiaoxiao']

console.log('my pets are' + arrayWithEmptyValue.join(', ') + ' and yujia.')

// join works for array-like object and string
console.log([].join.call(pets[0], '-'))
