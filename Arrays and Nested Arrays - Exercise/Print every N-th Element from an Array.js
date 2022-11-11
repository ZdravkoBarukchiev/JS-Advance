function printEveryNthElementFromAnArray(arr, n) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += n) {
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(printEveryNthElementFromAnArray(["dsa", "asd", "test", "tset"], 2));
