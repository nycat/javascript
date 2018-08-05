# Event
## Event Flow
The event flow specified by DOM Level 2 Events has three phases: the event capturing phase, at the target, and the event bubbling phase.

![alt text](./includes/event_flow.png)

## Event Handlers
Events are certain actions performed either by the user or by the browser itself. These events have
names like click, load, and mouseover. A function that is called in response to an event is called
an **event handler (or an event listener)**. <br>

#### DOM0 Level Event Handler
```javascript
window.onload = function (e) {
  // this points to window
  console.log(this)
  console.log(e)
}
document.body.onclick = function (e) {
  // this points to document.body
  console.log(this)
  console.log(e)
}
// remove event handler

document.body.onclick = null
```
<br>

#### DOM Level 2 Event Handlers
DOM Level 2 Events define two methods to deal with the assignment and removal of event handlers: **addEventListener()** and **removeEventListener()**. **(addEventListener and removeEventListener are compatible with IE9 and later)** <br>

```javascript
var sayHi = function () {
  console.log('hi')
}

/*
element.addEventListener(type: DOMString, callback: EventListener, capture?: boolean)
capture: true, event handler will excute at capture phase
capture: false, event handler will exture at bubble phase
*/

document.addEventListener('click', sayHi, false)
document.removeEventListener('click', sayHi, false)
```

For IE8 and previous version, ** attachEvent ** and ** detachEvent ** take over the same functionality as ** addEventListner ** and ** removeEventListener ** with the same params.
The differences is ** attachEvent ** and ** detachEvent ** only support event bubbling phase.

```javascript
var sayHi = function () {
  console.log('hi')
}
document.body.attachEvent('click', sayHi)
document.body.detachEvent('click', sayHi)
```
<br>

Compared with DOM0 Level event mechanism, DOM2 Level event mechanism enables mutitiple handlers binding. It's a smilarity to *** subscriber publisher *** pattern. Here is a simplified example of publisher and publisher code.

```javascript
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

```
<br><br>


## Event Object
When an event related to the DOM is fired, all of the relevant information is gathered and stored
on an object called event. An event object is an instance of **Event** class. <br>

We can acess Event object from chrome's console panel. By **Event.prototype**, we can have a quick look the properties of a event object. <br>
![alt text](./includes/Event.prototype.png)
<br>

- eventPhase, event handler excuted phase (1:capturing phase, 2: at targe, 3: bubbling phase)
- target, srcElement the element which triggers the event
There is no srcElement for firefox browser while there is no target for IE browser. A compatible solution is 
```javascript
let {target, srcElement} = e
let tarEle = target || target
```
- currentTarget, current target. It points to its current event handler's 
- type, event type


