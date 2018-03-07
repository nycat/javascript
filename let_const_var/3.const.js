/**Use const to declare a constant varible
* must assign a value with const deceleration
**/
const PI = 3.1415
console.log(PI)

try {
  // once a varible is declared as a constant in es6, it can not be modified
  PI = 10
} catch(e) {
  // statements
  console.log(e)
}

