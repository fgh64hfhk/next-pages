function add(a, b) {
  return a + b;
}

function withLog(options) {
  return function (fn) {
    
    return function (...args) {
      
      if (options.showArgs) {
        console.log("[ARGS]:", args)
      }

      const result = fn(...args);

      if (options.showResult) {
        console.log("[RESULT]:", result)
      }

      return result;
    }
  }
}

const loggedAdd = withLog({showArgs: false, showResult: false})(add)(10, 25)

console.log('logged Add:', loggedAdd)