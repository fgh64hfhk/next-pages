function throttle(fn, delay) {
  let lastTime = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lastTime > delay) {
      fn.apply(this, args);
      lastTime = now;
    }
  };
}

function handleSearch(str) {
  console.log("handleSearch:", str);
}

const throttledFn = throttle(handleSearch, 300);

throttledFn("第一次");

throttledFn("第二次");

setTimeout(() => {
  throttledFn("第三次");
}, 5000);
