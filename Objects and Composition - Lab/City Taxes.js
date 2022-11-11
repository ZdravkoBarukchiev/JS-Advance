function cityTaxes(name, population, treasury) {
  let ciyInfo = {
    name,
    population,
    treasury,
    taxRate: 10,
    collectTaxes() {
      this.treasury += this.population * this.taxRate;
    },
    applyGrowth(percentage) {
      let percent = percentage / 100 + 1;
      this.population *= percent;
    },
    applyRecession(percentage) {
      let percent = 1 - percentage / 100;
      this.treasury *= percent;
    },
  };
  return ciyInfo;
}
const city = cityTaxes("Tortuga", 7000, 15000);
console.log(city);
