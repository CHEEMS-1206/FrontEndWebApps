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
  if (num === "stop") {
    seconds.innerHTML = seconds.innerHTML;
  } else {
    secID = setInterval(function () {
      let ms = Number(seconds.innerHTML);
      if (ms == 59) {
        ms == 00;
        seconds.innerHTML = "00";
      } else {
        ms += 1;
        seconds.innerHTML = ms;
      }
    }, 1000);
  }
}

function incMins(num) {
  if (num === "stop") {
    minutes.innerHTML = minutes.innerHTML;
  } else {
    minID = setInterval(function () {
      let ms = Number(minutes.innerHTML);
      if (ms == 59) {
        ms == 00;
        minutes.innerHTML = "00";
      } else {
        ms += 1;
        minutes.innerHTML = ms;
      }
    }, 60000);
  }
}

function incHrs(num) {
  let timeInterval = 600000;
  if (num == "stop") {
    hours.innerHTML = hours.innerHTML;
  } else {
    hrID = setInterval(function () {
      let ms = Number(hours.innerHTML);
      if (ms == 59) {
        ms == 00;
        hours.innerHTML = "00";
      } else {
        ms += 1;
        hours.innerHTML = ms;
      }
    }, 60000 * 60);
  }
}

let start = document.getElementById("start");
let clicks = 0;
start.addEventListener("click", START);
function START() {
  clicks += 1;
  if (clicks == 1) {
    incMs();
    incSecs();
    incMins();
    incHrs();
  }
}

let stop = document.getElementById("stop");
stop.addEventListener("click", STOP);
function STOP() {
  incMs("stop");
  clearInterval(msID);
  incSecs("stop");
  clearInterval(secID);
  incMins("stop");
  clearInterval(minID);
  incHrs("stop");
  clearInterval(hrID);
  clicks = 0;
}
let msID, secID, minID, hrID;

let reset = document.getElementById("reset");
reset.addEventListener("click", function () {
  milliSeconds.innerHTML = "0";
  seconds.innerHTML = "00";
  minutes.innerHTML = "00";
  hours.innerHTML = "00";
  STOP();
});
