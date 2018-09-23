# Generator

The Generator function is an async programming solution of javascript in ES6, whose grammar is completely different to traditional functions.

You can treat Generator function as a state machine encapsulated multiple states, and its also a generator for  Iterator, as executing it will return an Iterator Object.

A sample of a Gennerator function

```javascript
function *helloWorldGennerator () {
  yield 'hello'
  yield 'world'
  return 'ending'
}

// hw is an Iterator  Object
let hw = helloWorldGennerator()

hw.next() // {value: 'hello', done: false }
hw.next() // {value: 'world', done: false }
hw.next() // {value: 'ending', done: true }
hw.next() // {value: 'undefined', done: true }
```

For the example above, there are three states in it, the first one is *'hello'*, the second one is *'world'*, and the third one is *'ending'*.

**Summary**, a Generator function returns an Iterator, which represents a pointer to the state of the generator function. Every time the **next** function called, an object with a **value** and a **done** property returned.

## 1. The yield expression

### 1.1 The excution logic of **next**

- step1: encounter **yield** pauses the remaining code and returns the value close to yield.
- step2: Next time a **next** called, the remaining code executes from the place paused to next **yield** keyword.
- step3: Whenever a **next** called, loop step2 until a **return** keyword is met and return the expression after the **return** keyword.
- step4: If there is no **return** for a gennerator function, the value of the returned object is *undefined.*