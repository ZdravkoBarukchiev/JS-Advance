function circleArea(input) {
  let typeOfInput = typeof input;
  let area = 0;
  if (typeOfInput === "number") {
    area = Math.PI * input * input;
    console.log(area.toFixed(2));
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${typeOfInput}.`
    );
  }
}
circleArea('hhgjg');
