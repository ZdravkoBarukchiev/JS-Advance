function solve() {
  document
    .getElementsByClassName("shopping-cart")[0]
    .addEventListener("click", onClicked);
  const output = document.getElementsByTagName("textarea")[0];
  const checkOut = document.getElementsByClassName("checkout")[0];
  checkOut.addEventListener("click", checking);
  let cart = [];
  function onClicked(el) {
    if (
      el.target.tagName == "BUTTON" &&
      el.target.classList.contains("add-product")
    ) {
      const product = el.target.parentNode.parentNode;
      const name = product.querySelector(".product-title").textContent;
      const price = Number(
        product.querySelector(".product-line-price").textContent
      );
      cart.push(name, price);
      output.value += `Added ${name} for ${price} to the cart.\n`;
    }
  }

  function checking() {
    const products = new Set();
    cart.forEach((p) => products.add(p.name));
    let total = 0;
    for (let i = 1; i <= cart.length; i += 2) {
      total += cart[i];
    }
    output.value += `You bought ${[...products.keys()].join(
      ", "
    )} for ${total.toFixed(2)}.`;
  }
}
