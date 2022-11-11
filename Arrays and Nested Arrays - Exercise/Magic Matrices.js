function magicMatrices(arr) {
  let arrL = arr.length;
  let sumRow = arr[0].reduce((a, b) => a + b);
  for (let i = 0; i < arrL; i++) {
    let colSum = 0;
    for (let j = 0; j < arrL; j++) {
      colSum += arr[i][j];
    }
    if (sumRow !== colSum) {
      return false;
    }
  }
  return true;
}
console.log(
  magicMatrices([
    [4, 5, 6],

    [6, 5, 4],

    [5, 5, 5],
  ])
);
