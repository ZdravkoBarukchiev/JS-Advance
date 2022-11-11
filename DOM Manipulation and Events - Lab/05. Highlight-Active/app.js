function focused() {
  let inputFields = document.querySelectorAll("input");
  for (input of inputFields) {
    input.addEventListener("focus", onFocused);
    input.addEventListener("blur", onBlured);
  }
  function onFocused(el) {
    el.target.parentNode.className = "focused";
  }
  function onBlured(el) {
    el.target.parentNode.className = "";
  }
}
