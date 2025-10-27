const cartItems = [
  { name: "筆記型電腦", inStock: true, quantity: 1 },
  { name: "滑鼠", inStock: true, quantity: 0 }, // 🚨 庫存有效但數量為 0
  { name: "鍵盤", inStock: false, quantity: 2 }, // 庫存無效，應被忽略
  { name: "螢幕", inStock: true, quantity: 3 },
  { name: "手機殼", inStock: true, quantity: 1 },
];

const checkValidQuantities = (items) => {
  return items
    .filter((item) => item.inStock === true)
    .every((inStockItem) => {
      return inStockItem.quantity > 0;
    });
};

const isValid = checkValidQuantities(cartItems);
console.log(`購物車數量是否有效？ ${isValid}`);

const isStrictlyIncreasing = (numbers) => {
  return numbers.every((currentValue, idx, arr) => {
    if (idx === 0) return true;
    const previousValue = arr[idx - 1];
    return currentValue > previousValue;
  });
};

// 測試案例
const array1 = [1, 5, 8, 10, 15]; // 嚴格遞增
const array2 = [1, 5, 5, 10, 15]; // 非嚴格遞增 (5 不大於 5)
const array3 = [10, 8, 5, 3]; // 遞減
const array4 = [5]; // 單一元素 (視為遞增)
const array5 = []; // 空陣列 (視為遞增)

console.log(`[1, 5, 8, 10, 15] 是否嚴格遞增? ${isStrictlyIncreasing(array1)}`); // 預期輸出: true
console.log(`[1, 5, 5, 10, 15] 是否嚴格遞增? ${isStrictlyIncreasing(array2)}`); // 預期輸出: false
console.log(`[10, 8, 5, 3] 是否嚴格遞增? ${isStrictlyIncreasing(array3)}`); // 預期輸出: false
console.log(`[5] 是否嚴格遞增? ${isStrictlyIncreasing(array4)}`); // 預期輸出: true
console.log(`[] 是否嚴格遞增? ${isStrictlyIncreasing(array5)}`); // 預期輸出: true (every() 對空陣列返回 true)
