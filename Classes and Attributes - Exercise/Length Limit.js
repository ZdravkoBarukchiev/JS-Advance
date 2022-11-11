class Stringer {
  constructor(str, num) {
    this.innerString = str;
    this.innerLength = num;
  }
  increase(length) {
    this.innerLength += length;
  }
  decrease(length) {
    this.innerLength -= length;
    if (this.innerLength < 0) {
      this.innerLength = 0;
    }
  }
  toString() {
    if (this.innerString.length > this.innerLength) {
      let diff = this.innerString.length - this.innerLength;
      this.innerString.slice(this.innerString, -diff);
      return this.innerString + "...";
    } else if (this.innerLength == 0) {
      return "...";
    } else {
      return this.innerString;
    }
  }
}

let test = new Stringer("Test", 5);

console.log(test.toString()); // Test

test.decrease(3);

console.log(test.toString()); // Te...

test.decrease(5);

console.log(test.toString()); // ...

test.increase(4);

console.log(test.toString()); // Test
