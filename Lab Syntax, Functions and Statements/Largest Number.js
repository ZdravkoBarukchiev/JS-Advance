function largestNumber(f, s, t) {
  let arr = [];
  arr.push(f, s, t);
  let largestNum = Number.MIN_SAFE_INTEGER;
  
  for (el of arr) {
    if(el>largestNum){
        largestNum=el
    }
  }
  console.log(`The largest number is ${largestNum}.`);
}
largestNumber(5, -3, -16);
