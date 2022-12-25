let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let milliSeconds = document.getElementById("ms");

console.log(
  `${hours.innerHTML + " " + minutes.innerHTML + " " + seconds.innerHTML}`
);

function incMs(num) {
  if (num === "stop") {
    milliSeconds.innerHTML = milliSeconds.innerHTML;
  } else {
    msID = setInterval(function () {
      let ms = Number(milliSeconds.innerHTML);
      if (ms == 9) {
        incSecs();
        ms == 0;
        milliSeconds.innerHTML = "0";
      } else {
        ms += 1;
        milliSeconds.innerHTML = ms;
      }
    }, 100);
  }
}

function incSecs(num) {
  let ms = Number(seconds.innerHTML);
  if (ms == 59) {
    incMins();
    ms == 00;
    seconds.innerHTML = "00";
  } else {
    ms += 1;
    seconds.innerHTML = ms;
  }
}
function incMins(num) {
  let ms = Number(minutes.innerHTML);
  if (ms == 59) {
    incHrs();
    ms == 00;
    minutes.innerHTML = "00";
  } else {
    ms += 1;
    minutes.innerHTML = ms;
  }
}

function incHrs(num) {
  let ms = Number(hours.innerHTML);
  if (ms == 99) {
    ms = 00;
    RESET();
  } else {
    ms += 1;
    hours.innerHTML = ms;
  }
}

let start = document.getElementById("start");
let clicks = 0;
start.addEventListener("click", START);
function START() {
  clicks += 1;
  if (clicks == 1) {
    incMs();
  }
}

let stop = document.getElementById("stop");
stop.addEventListener("click", STOP);
function STOP() {
  incMs("stop");
  clearInterval(msID);
  clicks = 0;
}
let msID, secID, minID, hrID;

let reset = document.getElementById("reset");
reset.addEventListener("click", RESET);
function RESET() {
  milliSeconds.innerHTML = "0";
  seconds.innerHTML = "00";
  minutes.innerHTML = "00";
  hours.innerHTML = "00";
  STOP();
}
