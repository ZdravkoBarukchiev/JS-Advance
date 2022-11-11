function heroicInventory(arr) {
  let array = arr;
  let newArr = [];
  for (el of array) {
    let obj = {};
    let token = el.split(" / ");
    obj.name = token[0];
    obj.level = Number(token[1]);
    if (token.length > 2) {
      obj.items = token[2].split(", ");
    }
    newArr.push(obj);
  }
  return JSON.stringify(newArr);
}
console.log(
  heroicInventory([
    "Isacc / 25 / Apple, GravityGun",

    "Derek / 12 / BarrelVest, DestructionSword",

    "Hes / 1 / Desolator, Sentinel, Antara",
  ])
);
