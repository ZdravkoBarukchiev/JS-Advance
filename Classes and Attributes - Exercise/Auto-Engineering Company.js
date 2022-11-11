function solve(input) {
  let objBrand = {};
  for (el of input) {
    let [brand, model, qantity] = el.split(" | ");

    if (!objBrand.hasOwnProperty(brand)) {
      objBrand[brand] = {};
    }
    if (!objBrand[brand].hasOwnProperty(model)) {
      objBrand[brand][model] = 0;
    }
    objBrand[brand][model] += Number(qantity);
  }
  let resultArr = Object.entries(objBrand);
  for (el of resultArr) {
    console.log(el[0]);

    for (element in el[1]) {
      console.log(`###${element} -> ${el[1][element]}`);
    }
  }
}
solve([
  "Audi | Q7 | 1000",
  "Audi | Q6 | 100",
  "BMW | X5 | 1000",
  "BMW | X6 | 100",
  "Citroen | C4 | 123",
  "Volga | GAZ-24 | 1000000",
  "Lada | Niva | 1000000",
  "Lada | Jigula | 1000000",
  "Citroen | C4 | 22",
  "Citroen | C5 | 10",
]);
