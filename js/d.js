function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function handleSearch(...str) {
  console.log("handleSearch:", str);
}

const debouncedFn = debounce(handleSearch, 3000);

debouncedFn("第一次", "第一次陣列");

debouncedFn("第二次", "第二次註冊");

debouncedFn("第三次", "第三次科科");
