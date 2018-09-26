# Iterator

## 1. Concepts of Iterator

### 1.1 Concepts of Iterator

There are four built-in collections in Javascript, including **Array**, **Object**, **Map**, and **Set**.

Iterator provides a unified interface to traverse  different data types.

### 1.2 Three functions of Iterator

- Providing a unified and easy visiting API for a variety of data type
- Sorting data by a specified order
- Providing **for...of** grammar to traverse data

### 1.3 Traversal process of the Iterator

- The returnd value for a created Iterator is a pointer which point to the start place of it;
- At the first time to call **next** of a Iterator, the pointer points to the first member of it;
- The second time to call **next**, the pointer points to the second member of the it;
- Calling *next** iteratelly util the pointer points to the end of it.

The returned value for calling **next** is an object like

```javascript
{
  value: ['a value']
  done: [Boolean]
}
```

A simulation of an Iterator:

```javascript
var it = makeIterator(['a', 'b'])
it.next() // { value: "a", done: false }
it.next() // { value: "b", done: false }
it.next()

function makeIterator () {
  var nextIndex = 0
  return {
    next: function() {
      return nextIndex < array.length ?
        {value: array[nextIndex++], done: false} :
        {value: undefined, done: true}
    }
  }
}
```

## 2. Default Iterator Interface

The purpose of Iterator is to provide a unified traverse mechanism by **for ...of** javascript grammar.

According to  ES6 standard, the default connector of Iterator interface is **Symbol.iterator**, which means a data that has a **Symbol.iterator** is iterable.

A sample code about an iterable object:

```javascript
const obj = {
  [Symbol.iterator]: function () {
    return {
      next: function () {
        return  {
          value: 1,
          done: true
        }
      }
    }
  }
}

let iterator = obj[Symbol.iterator]()
console.log(iterator.next())

```

Some built-in data structures in ES6 have an Iterator interface by default as they build Symbol.iterator property originally.

The data structures that have built-in Iterator are:

- Array
- Map
- Set
- String
- TypedArray
- arguments in a function
- NodeList

The **Object** does not have Iterator interface by default. To add **for ...of** support to an object, We need to add an iterator function to its **Symbol.iterator** property.

```javascript
class RangeIterator {
  constructor(start, end) {
    this.value = start
    this.stop = end
  }

  [Symbol.iterator] () {
    return this
  }

  next () {
    let value = this.value
    if(value < this.stop) {
      this.value++
      return {
        value,
        done: false
      }
    }
    return {
      done: true,
      value: undefined
    }
  }
}

function range(start, stop) {
  return new RangeIterator(start, stop)
}

for (let value of range(0, 3)) {
  console.log(value)
}
```

## 3. Usage of Iterator

- deconstruction

For Array and set, deconstruction calculate calls **Symbol.iterator** by default.

```javascript
let set = new Set().add('a').add('b').add('c')
let [x, y] = set

let [first, ...rest] = set
```

- Rest symbol

**...** calculation calls **Symbol.iterator** by default.

```javascript
var str = 'hello';
[...str] //  ['h','e','l','l','o']

let arr = ['b', 'c'];
['a', ...arr, 'd']
```

Convert a data with **Symbol.iterator** interface into an array.

```javascript
let arr = [...iterable]
```

- yield*

```javascript
let generator = function* () {
  yield 1;
  yield* [2,3,4];
  yield 5;
};

var iterator = generator();

iterator.next() // { value: 1, done: false }
iterator.next() // { value: 2, done: false }
iterator.next() // { value: 3, done: false }
iterator.next() // { value: 4, done: false }
iterator.next() // { value: 5, done: false }
iterator.next()
```

## 4. Iterator interface for String

The String is an array-like data structure, and it has a built-in Iterator interface.

```javascript
var someString = "hi";
typeof someString[Symbol.iterator]// "function"

var iterator = someString[Symbol.iterator]();

iterator.next()  // { value: "h", done: false }
iterator.next()  // { value: "i", done: false }
iterator.next()
```

## 5. The relationship between Iteartor interface and Generator

The simplest way to achieve an Iterator interface is by the Generator function.

```javascript
let myIterable = {
  [Symbol.iterator]: function* () {
    yield 1
    yield 2
    yield 3
  }
}
[...myIterable] // [1, 2, 3]


let obj = {
  * [Symbol.iterator]() {
    yield 'hello'
    yield 'world'
  }
};

for (let x of obj) {
  console.log(x)
}
```
