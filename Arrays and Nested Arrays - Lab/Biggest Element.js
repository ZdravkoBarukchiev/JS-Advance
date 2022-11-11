function biggestElement(arr) {
  let biggestEl = Number.MIN_SAFE_INTEGER;
  for (el of arr) {
    for (num of el) {
      if (num > biggestEl) {
        biggestEl = num;
      }
    }
  }
  return biggestEl;
}
biggestElement([
  [3, 5, 7, 12],
  [-1, 4, 33, 2],
  [8, 3, 0, 4, 121],
]);
