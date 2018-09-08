const pets = ['kido', 'maoqiu', 'xiaoxiao']

const petsJsx = pets.map(pet => {
  return `<li>${pet}</li>`
})

console.log(petsJsx.join(''))
