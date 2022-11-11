function managesTickets(tickets, criteria) {
  class Tickets {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }
  let result = [];
  tickets.map((el) => {
    let [destination, price, status] = el.split("|");
    price = Number(price);
    let ticket = new Tickets(destination, price, status);
    result.push(ticket);
  });
  return result.sort((a, b) => {
    if (typeof a[criteria] === "number") {
      return a[criteria] - b[criteria];
    } else {
      return a[criteria].localeCompare(b[criteria]);
    }
  });
}

console.log(
  managesTickets(
    [
      "Philadelphia|94.20|available",

      "New York City|95.99|available",

      "New York City|95.99|sold",

      "Boston|126.20|departed",
    ],

    "destination"
  )
);
