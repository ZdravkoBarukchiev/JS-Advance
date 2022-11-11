function carFactory(obj) {
  let car = {};
  car.model = obj.model;
  if (obj.power <= 90) {
    car.engine = {
      power: 90,
      volume: 1800,
    };
  } else if (obj.power <= 120) {
    car.engine = {
      power: 120,
      volume: 2400,
    };
  } else if (obj.power <= 200) {
    car.engine = {
      power: 200,
      volume: 3500,
    };
  }
  car.carriage = {
    type: obj.carriage,
    color: obj.color,
  };
  car.wheels = [];
  let carWeel = obj.wheelsize;
  if (carWeel % 2 == 0) {
    carWeel -= 1;
  }
  for (let i = 0; i < 4; i++) {
    car.wheels.push(carWeel);
  }

  return car;
}
console.log(
  carFactory({
    model: "VW Golf II",

    power: 130,

    color: "blue",

    carriage: "hatchback",

    wheelsize: 14,
  })
);
