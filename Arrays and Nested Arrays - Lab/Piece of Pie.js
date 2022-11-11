function pieceOfPie(arr, start, end) {
  let startIndex = arr.indexOf(start);
  let endIndex = arr.indexOf(end);
  let newArr = [];
  for (let i = startIndex; i <= endIndex; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
pieceOfPie(
  [
    "Pumpkin Pie",

    "Key Lime Pie",

    "Cherry Pie",

    "Lemon Meringue Pie",

    "Sugar Cream Pie",
  ],

  "Key Lime Pie",

  "Lemon Meringue Pie"
);
