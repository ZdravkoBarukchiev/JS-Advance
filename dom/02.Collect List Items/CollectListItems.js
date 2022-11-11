function extractText() {
  let ulElements = document.getElementById("items");
  let textAreaElement = document.getElementById("result");
  textAreaElement.textContent = ulElements.textContent;
}
