var Clock = function *() {
  while(true) {
    console.log('Tick')
    yield
    console.log('Tock')
    yield
  }
}

let clock = Clock()

clock.next()
clock.next()
clock.next()
clock.next()
clock.next()

