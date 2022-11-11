function mathOperations(fNum, sNum, str) {
  let result = 0;
  switch (str) {
    case "+":
      result = fNum + sNum;
      break;
    case "-":
      result = fNum - sNum;
      break;
    case "*":
      result = fNum * sNum;
      break;
    case "/":
      result = fNum / sNum;
      break;
    case "%":
      result = fNum % sNum;
      break;
    case "**":
      result = fNum ** sNum;
      break;
  }
  console.log(result);
}
mathOperations(5, 6, '**');
