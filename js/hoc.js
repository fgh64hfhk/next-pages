function add(a, b) {
  return a + b;
}

function withLog(fn) {
  
  return function (...args) {
    console.log('Call with args:', args);

    return fn (...args)
  }
}

const addWithLog = withLog(add)(5, 15)

console.log('add with log:', addWithLog)