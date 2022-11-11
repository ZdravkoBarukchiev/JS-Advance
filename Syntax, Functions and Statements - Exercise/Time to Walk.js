function timeToWalk(steps, footL, speed) {
  let distance = steps * footL;
  let speedInSec = (speed * 1000) / 3600;
  let extraMin = Math.floor(distance / 500) * 60;
  let time = distance / speedInSec + extraMin;

  let hours = Math.floor(time / 3600)
    .toFixed(0)
    .padStart(2, 0);
  let min = Math.floor(time / 60)
    .toFixed(0)
    .padStart(2, 0);
  let sek = (time % 60).toFixed(0).padStart(2, 0);
  console.log(`${hours}:${min}:${sek}`);
}
timeToWalk(4000, 0.6, 5);
