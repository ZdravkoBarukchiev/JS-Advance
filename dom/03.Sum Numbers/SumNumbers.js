function calc() {
  let firstNum = document.getElementById("num1");
  let secondNum = document.getElementById("num2");
  let sum = Number(firstNum.value) + Number(secondNum.value);
  let resultElement = document.getElementById("sum");
  resultElement.value = sum;
}
