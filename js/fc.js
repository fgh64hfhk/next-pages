// 定義簡單的函數
const add = (a, b) => a + b;
const double = (a) => a * 2;
const toCurrency = (a) => `$${a.toFixed(2)}`;

const pipe =
  (...func) =>
  (initialValue) =>
    func.reduce((accumulator, currentFunction) => {
      return currentFunction(accumulator);
    }, initialValue);

const initialPrice = 50;
const bonus = 5;
const finalPrice = pipe((price) => add(price, bonus), double, toCurrency)(initialPrice);

console.log('final price:', finalPrice)