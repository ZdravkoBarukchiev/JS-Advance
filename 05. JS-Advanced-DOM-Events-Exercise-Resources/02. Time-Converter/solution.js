function attachEventsListeners() {
  let inputDays = document.getElementById("days");
  let inputHours = document.getElementById("hours");
  let inputMinutes = document.getElementById("minutes");
  let inputSeconds = document.getElementById("seconds");

  let buttonDays = document.getElementById("daysBtn");
  buttonDays.addEventListener("click", convert);
  let buttonHours = document.getElementById("hoursBtn");
  buttonHours.addEventListener("click", convert);
  let buttonMinutes = document.getElementById("minutesBtn");
  buttonMinutes.addEventListener("click", convert);
  let buttonSeconds = document.getElementById("secondsBtn");
  buttonSeconds.addEventListener("click", convert);

  function convert(e) {
    let input =
      e.currentTarget.parentElement.querySelector('input[type="text"]');
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    switch (input.id) {
      case "days":
        days = Number(input.value);
        hours = Number(input.value) * 24;
        minutes = Number(input.value) * 1440;
        seconds = Number(input.value) * 86400;
        break;
      case "hours":
        days = Number(input.value) / 24;
        hours = Number(input.value);
        minutes = (Number(input.value) * 1440) / 24;
        seconds = (Number(input.value) * 86400) / 24;
        break;
      case "minutes":
        days = Number(input.value) / 1440;
        hours = Number(input.value) / 60;
        minutes = Number(input.value);
        seconds = Number(input.value) * 60;
        break;
      case "seconds":
        days = Number(input.value) / 86400;
        hours = Number(input.value) / 3600;
        minutes = Number(input.value) / 60;
        seconds = Number(input.value);
        break;
    }
    inputDays.value = days;
    inputHours.value = hours;
    inputMinutes.value = minutes;
    inputSeconds.value = seconds;
  }
}
