function solve(area, vol, input) {
  let newArr = [];
  let arrObj = JSON.parse(input);
  for (obj of arrObj) {
    let newObj = {
      area: area.call(obj),
      volume: vol.call(obj),
    };
    newArr.push(newObj);
  }
  return newArr;
}
console.log(
  solve(
    area,
    vol,
    `[

    {"x":"1","y":"2","z":"10"},
    
    {"x":"7","y":"7","z":"10"},
    
    {"x":"5","y":"2","z":"10"}
    
    ]`
  )
);
function vol() {
  return Math.abs(this.x * this.y * this.z);
}
function area() {
  return Math.abs(this.x * this.y);
}
