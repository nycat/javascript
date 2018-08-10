const a = {
  a: 'a'
};
const b = {
  b: 'b'
}
const d = {
  name: 'd',
  cat: {
    name: 'cat',
    from: {
      country: 'China',
      city: 'Beijing'
    }
  }
}
const c = {...a, ...b, ...d}


// mixin multiple class into one class
function mix(...mixins) {
  class Mix {}

  for (let mixin of mixins) {
    copyProperties(Mix.prototype, mixin); // 拷贝实例属性
    copyProperties(Mix.prototype, Reflect.getPrototypeOf(mixin)); // 拷贝原型属性
  }

  return Mix
}

function copyProperties(target, source) {
  for (let key of Reflect.ownKeys(source)) {
    if ( key !== "constructor"
      && key !== "prototype"
      && key !== "name"
    ) {
      let desc = Object.getOwnPropertyDescriptor(source, key);
      Object.defineProperty(target, key, desc);
    }
  }
}