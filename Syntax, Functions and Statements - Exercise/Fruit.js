function fruit(typeOfFruit, grams, price) {
  let kilo = grams / 1000;
  let totalPrice = kilo * price;
  console.log(
    `I need $${totalPrice.toFixed(2)} to buy ${kilo.toFixed(
      2
    )} kilograms ${typeOfFruit}.`
  );
}
fruit("apple", 1563, 2.35);
