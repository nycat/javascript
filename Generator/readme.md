# Generator

## 1. Basic Introduction

The Generator functions is a new async programming solution provided in ES6, the grammar of them is completely different from the traditional functions.
You can treat Generator function as a state machine encapsulated with multiple states. Executing a Generator function returns an Iterator object with all the state of it, so a Generator function is an Iterator object Generator as well.

There are two features for a Generator function that are

- there is a **\*** before its name
- having **yield expression** in its function body(can do have one in it)

Here is a Generator function sample:

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

For the sample above, there are three states in *hw* that is *'hello'*, *'world'*, and *'ending'* separately.

**Summary**, executing a Generator function returns an Iterator object, which is a pointer that points to the inner state of that Generator function. Every time the next function on the returned Iterator object called, an object, which represents the current state of a generator function,  with a value and a done property returned.

## 2. The yield expression

### 2.1 The execution logic behind **next**

- step 1: After executing a next, meeting a yield pauses current code flow and returns the value behind yield as the value for the returned object ;
- step 2: calling a next **next**  recovers code execution from the paused place  and circulates step 1;
- step 3: After circulating execution of step 1 and step 2, if there is no return keyword in a Generator function, the value property of the returned object is *undefined*; otherwise the value of it is the value after return. After step 1, step 2 and step 3, the state of a Generator function is *done: true*.

A Generator function can don't have a yield expression, and it becomes a simple suspend execution function.

```javascript
function* f() {
  console.log('excuted!')
}

var generator = f()

setTimeout(function () {
  generator.next()
}, 2000)
```

### 2.2 Tips for using yiled keyword

- Don's use yield outside a Generator function

```javascript
(function (){
  yield 1;
})()
// SyntaxError: Unexpected number
```

- Put yield into a *()* if it is being used in an expression unless it is being placed on the right side of an expression

```javascript
function* demo() {
  console.log('Hello' + yield); // SyntaxError
  console.log('Hello' + yield 123); // SyntaxError

  console.log('Hello' + (yield)); // OK
  console.log('Hello' + (yield 123)); // OK
}
```

```javascript
function* demo() {
  foo(yield 'a', yield 'b'); // OK
  let input = yield; // OK
}
```

### 2.3 The relationship between the Generator function and the Iterator

As described in the Iterator chapter, the **Symbol.iterator** of an object is the iterator generator function.

```javascript
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1
  yield 2
  yield 3
};

[...myIterable]
```

A sample code:

```javascript
function* gen(){
  // some code
}

var g = gen()

g[Symbol.iterator]() === g
```

For the above sample code, after executing *gem*, an iterator function called *g* returned. For *g*, running its *Symbol.iterator* function returns *g* itself.

## 3. Parameter for *next*

There is no returned value for *yiled* expression, or that is to say, *yiled* always returns an *undefined*. By passing a parameter to next, the parameter we passed by will be the returnd as the return value for the previous *yiled* in the genneration function we created.

A sample code of calling **next** of a generator function with parameter.

```javascript
function* f() {
  for(var i = 0; true; i++) {
    var reset = yield i;
    if(reset) { i = -1; }
  }
}

var g = f();

g.next() // { value: 0, done: false }
g.next() // { value: 1, done: false }
g.next(true)
```

Achieving returning a value for calling **next** at the first time needs to wrap a function. Here is a sample:

```javascript
function wrapper(generatorFunction) {
  return function (...args) {
    let generatorObject = generatorFunction(...args);
    generatorObject.next()
    return generatorObject
  }
}

const wrapped = wrapper(function* () {
  console.log(`First input: ${yield}`);
  return 'DONE'
})

wrapped().next('hello!')
```

## 4. for ... of

**for ..of** traverses the Iterator object returned by a Generator function automatically without calling *next* method.

```javascript
function* foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return 6;
}

for (let v of foo()) {
  console.log(v);
}
```

## 5. Generator.prototype.throw()

There is a *throw* method for the returned Iterator object by a Generator function, which can throw an error and get caught in the Generator function of it.

```javascript
var g = function* () {
  try {
    yield;
  } catch (e) {
    console.log('inner catch', e)
  }
};

var i = g();
i.next();

try {
  // Notice: throw expression comes from i
  i.throw('a');
  i.throw('b');
} catch (e) {
  console.log('外部捕获', e)
}
```

If there is no catch express in a Generator function, throw expression will be caught by catch expression outside of it.
No catch expression in a Generator function and outside of it will cause an uncaught error and terminate code execution flow.

## 6. Generator.prototype.return()

There is a return method on an Iterator object returned by a Generator function, it returns a specified value and changes the state of a Generation function into **done: true**. The value passed into return will be the value of the returned object's value property by execution return function.

A sample code about **Generator.prototype.return**:

```javascript
function *gen() {
  yield 1
  yield 2
  yield 3
}

let g = gen()
g.next() // { value: 1, done: false }
g.return() // { value: undefined, done: true } as there is no parameter provided to return()
```

If there is a **try... finally** expression in a Generator function, the return method that belongs to its iterator object executes after **finally** code block.

A sample code for a Generator function with *try...finally* expression.

```javascript
function *numbers () {
  yield 1
  try {
    yield 2
    yield 3
  } finally {
    yield 4
    yield 5
  }
  yield 6
}

let g = numbers()
g.next()
g.next()
g.return(7)
g.next()
g.next()
```

## 7. Compare next, throw, and return

For *next()*, *throw()*, and *return()*, they are similar as they both recover the execution of a Generator function and replace yield with a different expression.

- next() replaces yiled with  a value
- throw replaces yield with a throw expression
- return replaces yield with a return expression

## 8. yield* expression

Calling a Generator function inner another Generator:

```javascript
function *f() {
  yield 1
  yield 2
}

function *b() {
  yield 3
  f()
  yield 4
}

for (let v of b()) {
  console.log(v)
}
// 3
// 4
```

For the sampel above, the result we get is not

- 3
- 1
- 2
- 4

We need *yield\** expression to make

```javascript
function *f() {
  yield 1
  yield 2
}

function *b() {
  yield 3
  f()
  yield 4
}

for (let v of b()) {
  console.log(v)
}
// 3
// 4
```

it works. A sample that works

```javascript
function *f() {
  yield 1
  yield 2
}

function *b() {
  yield 3
  yield *f()
  yield 4
}

for (let v of b()) {
  console.log(v)
}
```

## 9. A Generator function works as a property of an object

```javascript
let obj = {
  * myGeneratorMethod () {
  }
}
```

which is equal to

```javascript
let obj = {
  * myGeneratorMethod: function () {
  }
}
```

## 10. the keyword *this* in a Generator function

A Generator function always returns an iterator object, which is a instance of that Generator function. So an iterator object of a Generator function shares all the properties on its Generaton function's prototype.

```javascript
function *g() {
  yield 1
}
g.prototype.hi = 'hi'

let i = g()
console.log(i instanceof g) //true
console.log(i.hi)
```

**Don't** call a Generator function with **new**. **Don't** treat a Generator function as a constructor.

```javascript
function *g() {
  yield 1
  this.hi = 'hi'
}

let i = g()
console.log(`i.hi: ${i.hi}`) // i.hi: undefined

```

```javascript
function *g() {
  yield 1
}

let i = new g()
// cause an error
```

## 11. Generator function and state machine

A clock sample

```javascript
var clock = function *() {
  while(true) {
    console.log('Tick')
    yield
    console.log('Tock')
    yield
  }
}
```

## 10. Generator and coroutine, and Context

To get more explaination,  go to [http://es6.ruanyifeng.com/#docs/generator](http://es6.ruanyifeng.com/#docs/generator) for more information.

For application of Generator function, please go do [ApplyGenerationFunctionInAsync.md](./includes/ApplyGenerationFunctionInAsync.md)
