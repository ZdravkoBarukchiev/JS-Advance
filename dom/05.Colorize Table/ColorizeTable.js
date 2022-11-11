function colorize() {
  let rows = document.getElementsByTagName("tr");
  let rowArr = Array.from(rows);
  let rowArrL = rowArr.length;
  for (let i = 0; i < rowArrL; i++) {
    if (i % 2 !== 0) {
      let selectedEl = rowArr[i];
      selectedEl.style.backgroundColor = "teal";
    }
  }
}
