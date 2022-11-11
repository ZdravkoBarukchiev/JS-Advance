function lastKNumbersSequance(n, k) {
  let arrResult = [1];
  for (let i = 1; i < n; i++) {
    let currentElements = arrResult.slice(-k);
    let sum = 0;
    for (let j = 0; j < currentElements.length; j++) {
      sum += currentElements[j];
    }
    arrResult.push(sum);
  }
  return arrResult;
}
lastKNumbersSequance(8, 2);
