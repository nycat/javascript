async function foo() {
  return 'hello, world'
}

console.log(`foo() instanceof Promise: ${foo() instanceof Promise}`)
