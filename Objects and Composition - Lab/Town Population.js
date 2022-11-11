function townPopulation(arr) {
  let townInfo = {};
  for (el of arr) {
    let token = el.split(" <-> ");
    let name = token[0];
    let population = Number(token[1]);
    if (!townInfo[name]) {
      townInfo[name] = 0;
    }
    townInfo[name] += population;
  }
  for (key in townInfo) {
    console.log(`${key} : ${townInfo[key]}`);
  }
}
townPopulation([
  "Istanbul <-> 100000",

  "Honk Kong <-> 2100004",

  "Jerusalem <-> 2352344",

  "Mexico City <-> 23401925",

  "Istanbul <-> 1000",
]);
