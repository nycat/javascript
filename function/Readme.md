# The relationship between Object and Function

## prototype

Every function has a **prototype** property, which is an object. The **prototype** has **constructor** property by default, which points to function itself.
![protptype](http://images.cnitblog.com/blog/138012/201409/172121182841896.png)

## Object.prototype

We can create a object by

```javascript
let o1 = new Object()
```

So **Object** is a function too, it also has a **prototype** property.
![object](http://images.cnitblog.com/blog/138012/201409/172130097842386.png)

## invisible prototype - __proto__

The prototype of a function is its **prototype** property.

Every object has a **__proto__** property, which points to constructor function of it.

Here is a sample code to test the relationship between the **__proto__** of an object and **Object.prototype**.

```javascript
const o1 = new Object()
const o2 = new Object()

console.log(`o1.__proto__ === Object.prototype: ${o1.__proto__ === Object.prototype}`)
console.log(`o1.__proto__ === o2.__proto__: ${o1.__proto__ === o2.__proto__}`)
```

A figure to explain above code:

![object](http://images.cnitblog.com/blog/138012/201409/181509180812624.png)

## **prototype** for a function

**Object.prototype** is null.
![fun](http://images.cnitblog.com/blog/138012/201409/181510403153733.png)

## ciculate

All the  functions are instance of **Function**, and their **__proto__** points to **Function.prototype**/
![curcle](http://images.cnitblog.com/blog/138012/201409/181512068463597.png)

## Function.prototype

As **Function.prototype** is an object and created by **Object**, its **__proto__** points to **Object.prototype**.
![obj](http://images.cnitblog.com/blog/138012/201409/181512489403338.png)

## Full explain

![total](http://images.cnitblog.com/blog/138012/201409/181637013624694.png)