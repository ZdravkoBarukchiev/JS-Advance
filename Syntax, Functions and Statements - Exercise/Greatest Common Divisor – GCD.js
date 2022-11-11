function greatestCommonDivisor(num1, num2) {
  let a = Number(num1);
  let b = Number(num2);
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  console.log(a);
}
greatestCommonDivisor(2154, 458);
