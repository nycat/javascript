async function sayello() {
  let info = await 'hello'
  return info
}

sayHello().then(data => {
  console.log(info) // 'hello'
}).catch(e => {
  console.log(e)
})
