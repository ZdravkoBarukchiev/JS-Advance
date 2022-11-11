function toggle() {
  let buton = document.querySelector(".button");
  let extraElement = document.querySelector("#extra");
  if (buton.textContent === "More") {
    buton.textContent = "Less";
    extraElement.style.display = "block";
  } else {
    buton.textContent = "More";
    extraElement.style.display = "none";
  }
}
