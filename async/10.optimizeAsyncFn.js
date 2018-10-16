/*example 1:
  Using catch expression
*/

function getInfo () {
  throw new Error('info1')
}

async function  foo(params) {
  // Using catch expression
  let info1 = await getInfo().catch(e => {
    return e
  })
}


/* example 2:
  trigger sequence excuation function after a await expression simultaneously
  await f1()
  await f2()
*/

async function foo1() {
  // solution 1
  let [foo, bar] = await Promise.all(getFoo(), getBar())

  // solution 2
  let fooPromise = getFoo()
  let barPromise = getBar()

  let foo = await fooPromise()
  let bar = await barPromise()
}
