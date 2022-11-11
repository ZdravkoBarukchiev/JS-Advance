function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);
  let row = document.querySelectorAll("tbody tr");
  let input = document.querySelector("#searchField");
  function onClick() {
    for (el of row) {
      el.classList.remove('select')
      if (el.textContent.includes(input.value) && input.value !== "") {
        el.className = "select";
      }
    }
  }
}
