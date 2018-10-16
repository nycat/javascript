async function foo(params) {
  let info1 = await Promise.resolve('info1')
  let info2 = await Promise.reject('info2')
  let info3 = await Promise.resolve('info3')
}

foo().then(data => {
  console.log(data)
}).catch(e => {
  console.log(e) // info2
})
