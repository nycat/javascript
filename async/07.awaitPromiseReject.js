async function foo(params) {
  await Promise.reject('hello')
}

foo().then(data => {
  console.log(data)
}).catch(e => {
  console.log(` Promise.reject: ${e}`)
})
