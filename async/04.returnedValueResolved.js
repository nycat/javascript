async function foo() {
  let data = await 1;
  return data
}

foo().then(data => {
  console.log(data)
}).catch(e => {
  console.log(e)
})
