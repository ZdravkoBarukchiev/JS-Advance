class List {
  constructor() {
    this.result = [];
    this.size = this.result.length;
  }
  add(element) {
    this.result.push(element);
    this.result.sort((a, b) => {
      return a - b;
    });
    this.size = this.result.length;
  }
  remove(index) {
    if (index < 0 || index >= this.result.length) {
      throw new Error("Invalid Index!");
    }
    this.result.splice(index, 1);
    this.size = this.result.length;
  }
  get(index) {
    if (index < 0 || index >= this.result.length) {
      throw new Error("Invalid Index!");
    }
    return this.result[index];
  }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(0);
console.log(list.get(1));
