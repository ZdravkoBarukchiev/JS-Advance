function calorieObject(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i += 2) {
    let product = arr[i];
    let calories = Number(arr[i + 1]);
    obj[product] = calories;
  }
  console.log(obj);
}
calorieObject(["Potato", "93", "Skyr", "63", "Cucumber", "18", "Milk", "42"]);
