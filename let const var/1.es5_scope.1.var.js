/** scope for es5
* no block scope for es5
* defination elevated while assignment not
**/
var flag = true
if (!flag) {
  var num = 10
}
// varible num is exposed to global
console.log(num)


function sayHi (sb) {
  // me is a local varible for sayHi, can not be accessed outside sayHi
  var me = 'Betty'
  console.log(me + ' say hi to ' + sb +'!')
}
sayHi('Iitai')
try {
  console.log(me)
} catch (e) {
  console.log('me can not be accessed!')
}

