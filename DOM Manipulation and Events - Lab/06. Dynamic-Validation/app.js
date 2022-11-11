function validate() {
  let inputElement = document.getElementById("email");
  inputElement.addEventListener("change", onChanged);

  function onChanged(el) {
    let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
    if (pattern.test(el.target.value)) {
      el.target.classList.remove("error");
    } else {
      el.target.classList.add("error");
    }
  }
}
