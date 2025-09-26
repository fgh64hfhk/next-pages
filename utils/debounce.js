function debounce(func, delay) {
  let timer = null;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const handleSearch = (str) => {
  console.log("觸發:", str, Date.now());
};

const debouncedHandleSearch = debounce(handleSearch, 1000);

debouncedHandleSearch("A");
debouncedHandleSearch("B");
debouncedHandleSearch("C");
