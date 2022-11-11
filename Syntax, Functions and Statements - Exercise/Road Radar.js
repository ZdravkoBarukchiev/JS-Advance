function roadRadar(speed, area) {
  let speedLimit = 0;
  let diff = 0;
  switch (area) {
    case "motorway":
      speedLimit = 130;
      diff = speed - speedLimit;
      if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
      } else if (diff <= 20) {
        console.log(
          `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - speeding`
        );
      } else if (diff <= 40) {
        console.log(
          `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`
        );
      } else {
        console.log(
          `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - reckless driving`
        );
      }
      break;
    case "interstate":
      speedLimit = 90;
      diff = speed - speedLimit;
      if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
      } else if (diff <= 20) {
        console.log(
          `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - speeding`
        );
      } else if (diff <= 40) {
        console.log(
          `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`
        );
      } else {
        console.log(
          `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - reckless driving`
        );
      }
      break;
    case "city":
      speedLimit = 50;
      diff = speed - speedLimit;
      if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
      } else if (diff <= 20) {
        console.log(
          `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - speeding`
        );
      } else if (diff <= 40) {
        console.log(
          `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`
        );
      } else {
        console.log(
          `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - reckless driving`
        );
      }
      break;
    case "residential":
      speedLimit = 20;
      diff = speed - speedLimit;
      if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
      } else if (diff <= 20) {
        console.log(
          `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - speeding`
        );
      } else if (diff <= 40) {
        console.log(
          `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`
        );
      } else {
        console.log(
          `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - reckless driving`
        );
      }
      break;
  }
}
roadRadar(21, "residential");
