function listOfNames(arr) {
  arr.sort((a, b) => a.localeCompare(b));
  let num = 0;
  for (el of arr) {
    num++;
    console.log(`${num}.${el}`);
  }
}

listOfNames(["John", "Bob", "Christina", "Ema"]);
