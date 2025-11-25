function withDebounce(options) {
  return function (fn) {
    let timer = null;
    return function (...args) {
      clearTimeout(timer);
      console.log(options.message || "debounced!");
      timer = setTimeout(() => fn(...args), options.delay || 300);
    };
  };
}

const search = withDebounce({
  delay: 500,
  message: "使用者停止輸入 0.5 秒",
})((str) => {
  console.log("search:", str);
});

search("第一次 debounce")
search("第二次 debounce")
search("第三次 debounce")

search("A");

setTimeout(() => search("B"), 100);  // 100ms 後
setTimeout(() => search("C"), 200);  // 200ms 後
setTimeout(() => search("D"), 300);  // 300ms 後
