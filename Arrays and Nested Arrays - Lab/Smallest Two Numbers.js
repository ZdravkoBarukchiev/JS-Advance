function smallestTwoNumbers(arr) {
  let firstSmallestNum = Number.MAX_SAFE_INTEGER;
  let secondSmallestNum = Number.MAX_SAFE_INTEGER;
  for (el of arr) {
    if (el <= firstSmallestNum) {
      firstSmallestNum = el;
    }
  }
  let index = arr.indexOf(firstSmallestNum);
  arr.splice(index, 1);
  for (el of arr) {
    if (el <= secondSmallestNum) {
      secondSmallestNum = el;
    }
  }
  console.log(firstSmallestNum, secondSmallestNum);
}
smallestTwoNumbers([3,1]);
