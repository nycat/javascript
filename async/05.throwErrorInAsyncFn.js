async function sayHi() {
  throw new Error('hello')
}

sayHi().catch(e => {
  console.log(e)
})
