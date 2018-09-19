/* example 1:
  Function's prototype structure
  Function.prototype: as Function is a function, so it has a property called Function.prototype
  Function.__proto__: as Function is an object, it has a __proto__ too.
*/

console.log(`1. Function.prototype.constructor === Function: ${Function.prototype.constructor === Function}`)
console.log(`2. Function.prototype.__proto__ === Object.prototype: ${Function.prototype.__proto__ === Object.prototype}`)
console.log(`3. Object.__proto__ === Function.prototype : ${Object.__proto__ === Function.prototype }`)
console.log(`4. Function.prototype.__proto__ === Object.prototype: ${Function.prototype.__proto__ === Object.prototype}`)
console.log(`5: Object.prototype.__proto__ === null: ${Object.prototype.__proto__ === null}`)

let f = new Function()
console.log(`6. f.__proto__ === Object.__proto__: ${f.__proto__ === Object.__proto__}, f.__proto__ === Function.prototype: ${f.__proto__ === Function.prototype}`)


/* example 2:
  Object is the constructor of all the object instance
  instanceof works for prototype chain
*/

console.log(`7. Function instanceof Object: ${Function instanceof Object}`)
console.log(`8. Object instanceof Object: ${Object instanceof Object}`)
console.log(`9. Object instance of Function: ${Object instanceof Function}`)

let o = new Object()
console.log(`10. o instanceof Object: ${o instanceof Object}`)

/* example 3:
  How instanceof works: https://www.ibm.com/developerworks/cn/web/1306_jiangjj_jsinstanceof/index.html
*/
function instance_of(L, R) {//L 表示左表达式，R 表示右表达式
  var O = R.prototype // 取 R 的显示原型
  L = L.__proto__ // 取 L 的隐式原型
  while(L) { 
    if (O === L)// 这里重点：当 O 严格等于 L 时，返回 true 
      return true
    L = L.__proto__
  } 
}

console.log(`Array instanceof Object: ${instance_of(Array, Object)} becasue of`)
console.log(`Array.__proto__.__proto__ === Object.prototype：${Array.__proto__.__proto__ === Object.prototype}`)
