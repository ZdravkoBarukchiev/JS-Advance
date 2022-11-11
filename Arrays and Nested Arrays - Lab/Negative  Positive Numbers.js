function negativePositiveNumbers(arr) {
  let newArr = [];
  for (el of arr) {
    if (el < 0) {
      newArr.unshift(el);
    } else {
      newArr.push(el);
    }
  }
  newArr.forEach((el) => console.log(el));
}
negativePositiveNumbers([3, -2, 0, -1]);
