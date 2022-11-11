function solve() {
  let text = document.getElementById("text").value;
  let namingConventionElement = document.getElementById("naming-convention");
  let command = namingConventionElement.value;
  let resultElement = document.getElementById("result");
  let result = "";

  switch (command) {
    case "Camel Case":
      for (let i = 0; i < text.length; i++) {
        if (text[i] == " ") {
          result += text[i + 1].toUpperCase();
          i++;
        } else {
          result += text[i].toLowerCase();
        }
      }
      break;
    case "Pascal Case":
      result += text[0].toUpperCase();
      for (let i = 1; i < text.length; i++) {
        if (text[i] == " ") {
          result += text[i + 1].toUpperCase();
          i++;
        } else {
          result += text[i].toLowerCase();
        }
      }
      break;
    default:
      result = "Error!";
      break;
  }
  resultElement.textContent = result;
}
