function sumFirstLast(arr) {
  let firstEl = arr.shift();
  let lastEl = arr.pop();
  let sum = Number(firstEl) + Number(lastEl);
  return sum;
}
console.log(sumFirstLast(["20", "30", "40"]));
