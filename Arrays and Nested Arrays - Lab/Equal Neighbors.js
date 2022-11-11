function equalNeighbors(arr) {
  let array = arr;
  let arrL = array.length;
  let counter = 0;

  for (let i = 0; i < arrL; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === array[i][j + 1]) {
        counter++;
      }
      if (array[i][j] === (array[i + 1] || [])[j]) {
        counter++;
      }
    }
  }
  return counter;
}
equalNeighbors([
  ["test", "yes", "yo", "ho"],
  ["well", "done", "yo", "6"],
  ["not", "done", "yet", "5"],
]);
