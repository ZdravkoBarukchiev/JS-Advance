function search() {
  let towns = document.querySelectorAll("#towns li");
  let input = document.querySelector("#searchText").value;
  let matchEl=document.querySelector('#result');
  let count=0;
  for (el of towns) {
    
    if (el.textContent.includes(input)) {
      el.style.fontWeight = "bold";
      el.style.textDecoration = "underline";
      count++
    } else {
      el.style.fontWeight = "normal";
      el.style.textDecoration = "none";
    }
  }
  matchEl.textContent=`${count} matches found`
}
