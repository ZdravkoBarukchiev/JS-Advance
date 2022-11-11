function aggregateElements(input) {
  let arr = input;
  let sum = 0;
  let inverseSum = 0;
  let concatLine = "";
  for (el of arr) {
    sum += el;
    inverseSum += 1 / el;
    concatLine += el;
  }
  console.log(sum);
  console.log(inverseSum);
  console.log(concatLine);
}
aggregateElements([2, 4, 8, 16]);
