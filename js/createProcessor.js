function createProcessor(processFunc) {
  let count = 0;

  return function (data) {
    console.log("開始處理資料...");
    const result = processFunc(data);
    console.log(`處理完成！結果(${count})為：`, result);
    count++;
    return result;
  };
}

const numberProcessor = createProcessor(function (num) {
  return num * 2;
});

numberProcessor(10);
numberProcessor(20);
numberProcessor(30);

const stringProcessor = createProcessor(function (str) {
  return str.toUpperCase();
});

stringProcessor("aa");
stringProcessor("bb");
stringProcessor("cc");
