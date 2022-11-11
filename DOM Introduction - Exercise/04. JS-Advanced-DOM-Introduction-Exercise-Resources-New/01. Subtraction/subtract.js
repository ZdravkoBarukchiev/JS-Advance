function subtract() {
  let firstNum = document.getElementById("firstNumber").value;
  let secondNum = document.getElementById("secondNumber").value;
  let resultElement = document.getElementById("result");
  let result = Number(firstNum) - Number(secondNum);
  resultElement.textContent = result;
}
