function sumTable() {
  let info = document.querySelectorAll("tr td:nth-of-type(2)");
  let sumTag = document.getElementById("sum");
  Array.from(info).pop();
  let sum = 0;
  for (el of info) {
    sum += Number(el.textContent);
  }
  sumTag.textContent = sum;
}
