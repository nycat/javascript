# Symbol

## 1. Concepts of Symbol

**Symbol** is a new data type imported in ES6. It's the seventh data type in Javascript, the others are *undefined*, *null*, *Boolean*, *String*, *Number* and *Object*.

By importing *Symbol* in Javascript, an Object instance has two types of property key, the first is a *String*, the second one is a *Symbol*.
Any property that the key of it is a **Symbol** promise it will not conflicat with other keys.

A sample about creating a Symbol:

```javascript
let s = Symbol() // a new before Symbol will cause error
console.log(typeof s)
```

## 2. Cautions

- No **new** before **Symbol** when creating a Symbol instance
- Every Symbol instance is unique, the same parameter for creating a Symbol returns different symbols that is because the parameter passed to the **Symbol** means a decsription of a symbol instance.

```javascript
let s1 = Symbol('hello')
let s2 = Symbole('hello')
console.log(`s1 === s2: ${s1 === s2}`)
```

- A Symbol instance can not be converted into a Number.
- A Symbol can be converted into a string

```javascript
let s = String(s1)
console.log(s) // 'Symbol('hello')
```

- A **Symbol** can be converted into a **Boolean** value

```javascript
let boolS1 = !s1
```

## 3. A symbol as the key of an object

A sample code about a symbol as the key of a property in an object.

```javascript
let mySymbol = Symbol();

let a1 = {}
a1[mySymbol] = 'Hello!';

let a2 = {
  [mySymbol]: 'Hello!'
}


let a3 = {};
Object.defineProperty(a3, mySymbol, { value: 'Hello!' })

a3[mySymbol]
```

**Caution:** If a key for an object is a Symbol, do not use *dot expression** to reach the property by it, otherwise it will cause an error.

```javascript
let s1 = Symbol('s1')
let object = {
  [s1]: 'Hello'
}
```

**The symbol as a key for an object can not be reached** by *for ..in**, *for ...of*, *Object.keys()*, *Object.getOwnPropertyNames()*, *JSON.stringify()*. We can use **Object.getOwnPropertySymbols** to get keys that are symbols for an object. The returned value for it is an array that memmbers of it are symbols of that object.

To get all the keys including both symbol and the common, a new API called **Reflect.ownKeys** is available to help.

Please click [04.getOwnPropertySymbols_and_Reflect.ownKeys.js](./04.getOwnPropertySymbols_and_Reflect.ownKeys.js) to check the sample code for **Reflect.ownKeys** and **Object.getOwnPropertySymbols**.

## 4. Symbol.for

Logic of Symbol.for:

- step1: search for a symbol that the key of it is the same with the parameter passed in
- step2: If found one, return it; otherwise create a new one and return it.

```javascript
let s1 = Symbol.for('foo')
let s2 = Symbol.for('foo')
let s3 = Symbol('foo')

s1 === s2 // true
s3 === s1 // false
```

## 5. Symbol.keyFor

**Symbol.keyFor** return the key of a symbol

```javascript
let s1 = Symbol('s1')
console.log(Symbol.keyFor(s1)) //s1
```

## 6. Usage of Smybol

- [Singleton for module](http://es6.ruanyifeng.com/#docs/symbol#实例：模块的-Singleton-模式)
- To define property that is not private but can only be accessed in interal

```javascript
let size = Symbol('size');

class Collection {
  constructor() {
    this[size] = 0;
  }

  add(item) {
    this[this[size]] = item;
    this[size]++;
  }

  static sizeOf(instance) {
    return instance[size];
  }
}

let x = new Collection();
Collection.sizeOf(x) // 0

x.add('foo');
Collection.sizeOf(x) // 1

Object.keys(x) // ['0']
Object.getOwnPropertyNames(x) // ['0']
Object.getOwnPropertySymbols(x)
```

## 7. Eleven built-in Symbol values

### 7.1 [Symbol.iterator](http://es6.ruanyifeng.com/#docs/symbol#Symbol-iterator)

The *[Symbol.iterator]* key of an object points to its iterator function by default.

```javascript
const myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

[...myIterable]
```