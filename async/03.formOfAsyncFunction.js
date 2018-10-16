/* example 1:
  function decalaration
*/
async function foo1() {
}

/*example 2:
  function expression
*/
const foo2 = async () => {}

/* example 3:
  as a function of an object
*/

const person = {
  name: 'alice',
  async logInfo () {
    console.log(this.name)
  }
}
person.logInfo()

/* example 4:
  member function of a Class
*/

class Storage {
  constructor() {
    this.cachePromise = caches.open('avatar')
  }
  
  async getAvatar(name) {
    const cache = await this.cachePromise;
    return cache.match(`/avatars/${name}.jpg`)
  }
}

