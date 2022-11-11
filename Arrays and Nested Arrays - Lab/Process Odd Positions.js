function processOddPositions(arr) {
  let arrL = arr.length;
  let newArr = [];
  for (let i = 1; i <= arrL; i += 2) {
    newArr.unshift(arr[i]);
  }
  let doubledArr = newArr.map((x) => x * 2);

  return doubledArr.join(" ");
}
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));
