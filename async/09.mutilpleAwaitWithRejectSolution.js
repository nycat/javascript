async function foo(params) {
  let info1 = await Promise.resolve('info1')
  // solve reject of an await expression in an async function with mutiple async expression
  let info2 = await Promise.reject('info2').catch(e => {
    return 'info2'
  })
  let info3 = await Promise.resolve('info3')
  return 'done'
}

foo().then(data => {
  console.log(data) // done
}).catch(e => {
  console.log(e)
})
