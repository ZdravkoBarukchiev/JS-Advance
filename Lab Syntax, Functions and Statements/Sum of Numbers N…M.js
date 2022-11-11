function sumOfNumbersNM(n, m) {
  let sum = 0;
  let numN=Number(n);
  let numM=Number(m);
  for (let i = numN; i <= numM; i++) {
    sum+=i
  }
  return sum;
}
console.log(sumOfNumbersNM("-8", "20"));
