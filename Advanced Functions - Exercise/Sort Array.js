function sortArray(arr, comm) {
  let array = arr;
  let command = comm;

  if (command == "asc") {
    array.sort((a, b) => a - b);
  } else {
    array.sort((a, b) => b - a);
  }
  return array;
}
sortArray([14, 7, 17, 6, 8], "asc");
