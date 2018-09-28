function *f() {
  for (var i =0; true; i++) {
    let reset = yield i
    if(reset) {
      i = -1
    }
    console.log(`i:${i}, reset:${reset}`)
  }
}

let g = f()

g.next()
g.next()
g.next()
g.next()
g.next(true)
