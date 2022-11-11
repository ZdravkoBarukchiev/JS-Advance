function sameNumbers(input) {
  let sum = 0;
  let str = String(input);
  let strL = str.length;
  let arr = [];
  let isSame = true;
  for (let i = 0; i < strL; i++) {
    arr.push(str[i]);
  }
  for (el of arr) {
    if (el !== str[0]) {
      isSame = false;
      break;
    }
  }
  console.log(isSame);
  
  for (el of arr) {
    let number=Number(el)
    sum += number;
  }
  console.log(sum);
}
sameNumbers(2222222);
