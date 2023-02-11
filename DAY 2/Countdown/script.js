let newY = new Date("2024-01-01");

const dayhtml = document.querySelector(".days");
const hourhtml = document.querySelector(".hours");
const minutehtml = document.querySelector(".minutes");
const secondhtml = document.querySelector(".seconds");

setInterval(function () {
  let today = new Date().getTime();
  let days = Math.floor((newY - today) / (1000 * 60 * 60 * 24));
  let hours = Math.floor((newY - today) / (1000 * 60 * 60)) - days * 24;
  let minutes =
    Math.floor((newY - today) / (1000 * 60)) - days * 24 * 60 - hours * 60;
  let seconds =
    Math.floor((newY - today) / 1000) -
    days * 24 * 60 * 60 -
    hours * 60 * 60 -
    minutes * 60;

  days < 10 ? (days = "0" + days) : (days = "" + days);
  hours < 10 ? (hours = "0" + hours) : (hours = "" + hours);
  minutes < 10 ? (minutes = "0" + minutes) : (minutes = "" + minutes);
  seconds < 10 ? (seconds = "0" + seconds) : (seconds = "" + seconds);
  dayhtml.innerHTML = days;
  hourhtml.innerHTML = hours;
  minutehtml.innerHTML = minutes;
  secondhtml.innerHTML = seconds;
}, 1000);
