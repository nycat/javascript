function asyncLog(info, time) {
   return new Promise((resolve, reject) => {
      let tId = setTimeout(() => {
        clearTimeout(tId)
        tId = null
        // without calling resolve or reject will lead to stop await excuation
        resolve(info)
      }, time)
   })
}

async function twoAwaitFoo() {
  let start = Date.now()
  console.log(`start: ${start};`)
  let info1 = await asyncLog('t1', 1000).catch(e => {
    return e
  })
  let info2 = await asyncLog('t2', 1000).catch(e => {
    return e
  })
  let end = Date.now()
  console.log(`end: ${end};`)
  console.log(`gap: ${end - start};`)

  return {
    info1,
    info2
  }
}

twoAwaitFoo().then(data => {
  console.log(data)
}).catch(e => {
  console.log(e)
})
