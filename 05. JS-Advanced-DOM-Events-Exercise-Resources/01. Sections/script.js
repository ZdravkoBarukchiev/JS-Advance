function create(words) {
  let contentElement = document.getElementById("content");
  contentElement.addEventListener("click", onClick);
  for (w of words) {
    let divElement = document.createElement("div");
    let pElement = document.createElement("p");
    pElement.textContent = w;
    pElement.style.display = "none";
    divElement.appendChild(pElement);
    contentElement.appendChild(divElement);
  }

  function onClick(e) {
    if (e.target.tagName === "DIV" && e.target !== contentElement)
      e.target.children[0].style.display = "block";
  }
}
