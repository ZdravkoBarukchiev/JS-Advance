function addItem() {
  let inputText = document.getElementById("newItemText").value;
  let inputValue = document.getElementById("newItemValue").value;
  let selectElement = document.getElementById("menu");
  let button = document.querySelector('input[type="button"');
  button.addEventListener("click", onClic);

  function onClic(e) {
    let newElement = document.createElement("option");
    newElement.textContent = inputText + inputValue;
    selectElement.appendChild(newElement);
  }
  
}
