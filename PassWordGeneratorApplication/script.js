let Display = document.getElementById("display");
let number;

// if user wants any kind of password
function GETRANDOM() {
  let a = "";
  for (let i = 0; i < number; i++) {
    randNum = Math.trunc(Math.random() * 88 + 35);
    switch (randNum) {
      case 39:
      case 40:
      case 41:
      case 44:
      case 46:
      case 47:
      case 58:
      case 59:
      case 91:
      case 92:
      case 93:
      case 96:
      case 60:
      case 61:
      case 62:
      case 63:
      case 37:
      case 94: {
        i--;
        break;
      }
      default: {
        a += String.fromCharCode(randNum);
      }
    }
  }
  Display.innerHTML = a;
}

let rand = document.getElementById("rand");
rand.addEventListener("click", function () {
  number = document.getElementById("length").value;
  if (number) {
    GETRANDOM();
  } else {
    alert("no length entered");
  }
});

// if user wants password without special characters
function NOSPECIALCHAR() {
  let a = "";
  for (let i = 0; i < number; i++) {
    randNum = Math.trunc(Math.random() * 75 + 48);
    switch (randNum) {
      case 58:
      case 59:
      case 60:
      case 61:
      case 62:
      case 63:
      case 64:
      case 91:
      case 92:
      case 93:
      case 94:
      case 95:
      case 96:
      case 123: {
        i--;
        break;
      }
      default: {
        a += String.fromCharCode(randNum);
      }
    }
  }
  Display.innerHTML = a;
}
let noChar = document.getElementById("noChar");
noChar.addEventListener("click", function () {
  number = document.getElementById("length").value;
  if (number) {
    NOSPECIALCHAR();
  } else {
    alert("no length entered");
  }
});

// if user wants numeric password only
function NUMBERONLY() {
  let a = "";
  for (let i = 0; i < number; i++) {
    a += String.fromCharCode(Math.trunc(Math.random() * 10 + 48));
  }
  Display.innerHTML = a;
}
let numOnly = document.getElementById("numOnly");
numOnly.addEventListener("click", function () {
  number = document.getElementById("length").value;
  if (number) {
    NUMBERONLY();
  } else {
    alert("no length entered");
  }
});

// if user wants small character password only
function SMALLONLY() {
  let a = "";
  for (let i = 0; i < number; i++) {
    a += String.fromCharCode(Math.trunc(Math.random() * 26 + 97));
  }
  Display.innerHTML = a;
}
let allSmall = document.getElementById("allSmall");
allSmall.addEventListener("click", function () {
  number = document.getElementById("length").value;
  if (number) {
    SMALLONLY();
  } else {
    alert("no length entered");
  }
});

// if user wants capital character password only
function CAPONLY() {
  let a = "";
  for (let i = 0; i < number; i++) {
    a += String.fromCharCode(Math.trunc(Math.random() * 26 + 65));
  }
  Display.innerHTML = a;
}
let allCaps = document.getElementById("allCaps");
allCaps.addEventListener("click", function () {
  number = document.getElementById("length").value;
  if (number) {
    CAPONLY();
  } else {
    alert("no length entered");
  }
});

// if user wants character password only
function CHARONLY() {
  let a = "";
  for (let i = 0; i < number; i++) {
    randNum = Math.trunc(Math.random() * 58 + 65);
    switch (randNum) {
      case 91:
      case 92:
      case 93:
      case 94:
      case 95:
      case 96:
      case 123: {
        i--;
        break;
      }
      default: {
        a += String.fromCharCode(randNum);
      }
    }
  }
  Display.innerHTML = a;
}
let noNum = document.getElementById("noNum");
noNum.addEventListener("click", function () {
  number = document.getElementById("length").value;
  if (number) {
    CHARONLY();
  } else {
    alert("no length entered");
  }
});
// let ans = NUMBERONLY()
// console.log(ans);
// console.log(ans.length);
// console.log("----------------------------")
// ans = SMALLONLY();
// console.log(ans);
// console.log(ans.length);
// console.log("----------------------------");
// ans = CAPONLY();
// console.log(ans);
// console.log(ans.length);
// console.log("----------------------------");
// ans = GETRANDOM()
// console.log(ans);
// console.log(ans.length);
// console.log("----------------------------")
// ans = NOSPECIALCHAR();
// console.log(ans);
// console.log(ans.length);
// console.log("----------------------------");
// ans = CHARONLY();
// console.log(ans);
// console.log(ans.length);
// console.log("----------------------------");
