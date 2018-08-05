const event  = {
  events: {},
  listen: function (key, fn) {
    if (!this.events[key]) {
      this.events[key] = []
    }
    this.events[key].push(fn)
  },
  // rest param is an array
  trigger: function (key, ...rest) {
    if (this.events[key]) {
      let fns = this.events[key]
      for (let i = 0, len = fns.length; i < len; i++) {
        let fn = fns[i]
        if (typeof fn === 'function') {
          fn.apply(this, rest)
        }
      }
    }
    return false
  }
}

function sayHello () {
  console.log('hello')
}

// sayHello is a subscriber
event.listen('hello', sayHello)
// event is a publisher
event.trigger('hello')
