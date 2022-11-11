function solve() {
  let input = document.querySelector("#input").value;
  let inputArr = input.split(".").filter((x) => x !== "");
  let outputDiv = document.querySelector("#output");

  while (inputArr.length > 0) {
    let pText = inputArr.splice(0, 3).join(". ") + ".";
    let p = document.createElement("p");
    p.textContent = pText;
    outputDiv.appendChild(p);
  }
}
