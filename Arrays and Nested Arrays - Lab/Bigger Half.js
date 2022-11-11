function biggerHalf(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  let halfLength = Math.floor(sortedArr.length / 2);
  let newArr = [];
  for (let i = halfLength; i < sortedArr.length; i++) {
    newArr.push(sortedArr[i]);
  }
  return newArr;
}
biggerHalf([3, 19, 14, 7, 2, 19, 8]);
