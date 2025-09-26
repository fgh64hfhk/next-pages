function throttle(func, delay) {
  let lastTime = 0;
  let timer = null;

  return function (...args) {
    const now = Date.now();
    const remaining = delay - (now - lastTime);

    if (remaining <= 0) {
      func.apply(this, args);
      lastTime = now;
    } else {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        lastTime = Date.now();
        timer = null;
        func.apply(this, args);
      }, remaining);
    }
  };
}

const handleSearch = (str) => {
  console.log("觸發:", str, Date.now());
};

const throttledHandleSearch = throttle(handleSearch, 1000);

throttledHandleSearch("A"); // 立刻執行
throttledHandleSearch("B"); // 被忽略
throttledHandleSearch("C"); // 被忽略，但「最後一次」會補執行
