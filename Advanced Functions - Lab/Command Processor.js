function solution() {
  let str = "";
  return {
    append,
    removeStart,
    removeEnd,
    print,
  };
  function append(input) {
    return (str += input);
  }
  function removeStart(input) {
    str = str.slice(input);
  }
  function removeEnd(input) {
    str = str.slice(0, -input);
  }
  function print() {
    console.log(str);
  }
}
let secondZeroTest = solution();

secondZeroTest.append("123");

secondZeroTest.append("45");

secondZeroTest.removeStart(2);

secondZeroTest.removeEnd(1);

secondZeroTest.print();
