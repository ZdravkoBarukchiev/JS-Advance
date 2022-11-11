function deleteByEmail() {
  let inputEmailElement = document.querySelector('input[name="email"]');
  let elementsForChecking = document.querySelectorAll("tr td:nth-of-type(2)");
  let resultElement = document.getElementById("result");
  let checkingArr = Array.from(elementsForChecking);

  for (el of checkingArr) {
    if (el.textContent == inputEmailElement.value) {
      el.parentNode.remove();
      resultElement.textContent = "Deleted.";
    } else {
      resultElement.textContent = "Not found.";
    }
  }
}
