function addItem() {
  let ItemsElement = document.querySelector("#items");
  let inputElement = document.querySelector("#newItemText");

  let liElement = document.createElement("li");
  liElement.textContent = inputElement.value;
  let deleteElement = document.createElement("a");
  deleteElement.href = "#";
  deleteElement.textContent = "[Delete]";
  deleteElement.addEventListener("click", (e) => {
    e.currentTarget.parentNode.remove();
  });

  liElement.appendChild(deleteElement);
  ItemsElement.appendChild(liElement);
}
