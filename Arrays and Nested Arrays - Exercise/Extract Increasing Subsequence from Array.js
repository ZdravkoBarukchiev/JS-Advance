function extractIncreasingSubsequenceFromArray(arr) {
  let maxNum = Number.MIN_SAFE_INTEGER;
  let newArr = [];
  for (el of arr) {
    if (el >= maxNum) {
      maxNum = el;
      newArr.push(maxNum);
    }
  }

  return newArr;
}
extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
