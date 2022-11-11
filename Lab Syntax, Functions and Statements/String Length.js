function stringLength(first, second, thrid) {
  let firstL = first.length;
  let secondL = second.length;
  let thridL = thrid.length;
  let sum = firstL + secondL + thridL;
  let average = Math.floor(sum / 3);
  console.log(sum);
  console.log(average);
}
stringLength("chocolate", "ice cream", "cake");
