function squareOfStars(input = 5) {
  let num = input;
  let printArr = [];
  for (let i = 0; i < num; i++) {
    printArr.push("*");
  }
  for (let i = 0; i < num; i++) {
    console.log(printArr.join(" "));
  }
}
squareOfStars(8);
