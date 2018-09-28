/*example 1:
  encalpuslate an asynchronous operation
*/
import fetch from 'fetch'

function *gen() {
  let url = 'https://api.github.com/users/github'
  let result = yield fetch(url)
  console.log(result.bio)
}

/*example 2:
  usage of gen
*/

let g = gen()
let result = g.next()

result.value.then((data) => {
  return data.json()
}).then((data) => {
  g.next(data)
})
