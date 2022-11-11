function sortingNumbers(arr) {
  let newArr = [];
  let sortedArr = arr.sort((a, b) => a - b);
  let arrL = sortedArr.length;
  for (let i = 0; i < arrL / 2; i++) {
    let minNum = sortedArr.shift();
    let maxNum = sortedArr.pop();
    newArr.push(minNum, maxNum);
  }
  return newArr;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
