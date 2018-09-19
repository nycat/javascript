/* exaple 1：
  A parameter must be provided.
*/
function throwIfMissing() {
  throw new Error('Missing parameter')
}

function foo(mustBeProvided = throwIfMissing()) {
  return mustBeProvided
}

foo()
