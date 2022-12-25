let leftValue = document.getElementById("leftValue");
let leftSelection = document.getElementById("selectionLeft");

let rightValue = document.getElementById("rightValue");
let rightSelection = document.getElementById("selectionRight");

let formula = document.getElementById("formula");
console.log(formula);
// selction.value == gives the value out of the options that is currently selected

leftSelection.addEventListener("change", changeRightValue);
rightSelection.addEventListener("change", changeLeftValue);
leftValue.addEventListener("input", changeRightValue);
rightValue.addEventListener("input", changeLeftValue);

let VALUE = 1;

//for lhs is anything and rhs is kg
function changeLeftValue() {
  if (leftSelection.value == rightSelection.value) {
    VALUE = rightValue.value;
  } else if (
    leftSelection.value == "Tonne" &&
    rightSelection.value == "Kilogram"
  ) {
    VALUE = rightValue.value / 1000;
  } else if (
    leftSelection.value == "gram" &&
    rightSelection.value == "Kilogram"
  ) {
    VALUE = rightValue.value * 1000;
  } else if (
    leftSelection.value == "milligram" &&
    rightSelection.value == "Kilogram"
  ) {
    VALUE = rightValue.value * 1000000;
  } else if (
    leftSelection.value == "microgram" &&
    rightSelection.value == "Kilogram"
  ) {
    VALUE = rightValue.value * 1000000000;
  } else if (
    leftSelection.value == "imperial tonne" &&
    rightSelection.value == "Kilogram"
  ) {
    VALUE = rightValue.value / 1016.05;
  } else if (
    leftSelection.value == "us tonne" &&
    rightSelection.value == "Kilogram"
  ) {
    VALUE = rightValue.value / 907.18;
  } else if (
    leftSelection.value == "stone" &&
    rightSelection.value == "Kilogram"
  ) {
    VALUE = rightValue.value / 6.35;
  } else if (
    leftSelection.value == "pounds" &&
    rightSelection.value == "Kilogram"
  ) {
    VALUE = rightValue.value * 2.204;
  } else if (
    leftSelection.value == "ounce" &&
    rightSelection.value == "Kilogram"
  ) {
    VALUE = rightValue.value / 0.02835;
  }

  // //for lhs is anything and rhs is tonne
  else if (
    leftSelection.value == "Kilogram" &&
    rightSelection.value == "Tonne"
  ) {
    VALUE = rightValue.value * 1000;
  } else if (leftSelection.value == "gram" && rightSelection.value == "Tonne") {
    VALUE = rightValue.value * 1000000;
  } else if (
    leftSelection.value == "milligram" &&
    rightSelection.value == "Tonne"
  ) {
    VALUE = rightValue.value * 1000000000;
  } else if (
    leftSelection.value == "microgram" &&
    rightSelection.value == "Tonne"
  ) {
    VALUE = rightValue.value * 1000000000000;
  } else if (
    leftSelection.value == "imperial tonne" &&
    rightSelection.value == "Tonne"
  ) {
    VALUE = rightValue.value / 1.01605;
  } else if (
    leftSelection.value == "us tonne" &&
    rightSelection.value == "Tonne"
  ) {
    VALUE = rightValue.value / 0.90718;
  } else if (
    leftSelection.value == "stone" &&
    rightSelection.value == "Tonne"
  ) {
    VALUE = rightValue.value / 0.00635;
  } else if (
    leftSelection.value == "pounds" &&
    rightSelection.value == "Tonne"
  ) {
    VALUE = rightValue.value * 2204;
  } else if (
    leftSelection.value == "ounce" &&
    rightSelection.value == "Tonne"
  ) {
    VALUE = rightValue.value / 0.00002835;
  }

  //for lhs is anything and rhs is gram
  else if (leftSelection.value == "Tonne" && rightSelection.value == "gram") {
    VALUE = rightValue.value / 1000000;
  } else if (
    leftSelection.value == "Kilogram" &&
    rightSelection.value == "gram"
  ) {
    VALUE = rightValue.value / 1000;
  } else if (
    leftSelection.value == "milligram" &&
    rightSelection.value == "gram"
  ) {
    VALUE = rightValue.value * 1000;
  } else if (
    leftSelection.value == "microgram" &&
    rightSelection.value == "gram"
  ) {
    VALUE = rightValue.value * 1000000;
  } else if (
    leftSelection.value == "imperial tonne" &&
    rightSelection.value == "gram"
  ) {
    VALUE = rightValue.value / 101605;
  } else if (
    leftSelection.value == "us tonne" &&
    rightSelection.value == "gram"
  ) {
    VALUE = rightValue.value / 907180;
  } else if (leftSelection.value == "stone" && rightSelection.value == "gram") {
    VALUE = rightValue.value / 6350;
  } else if (
    leftSelection.value == "pounds" &&
    rightSelection.value == "gram"
  ) {
    VALUE = rightValue.value * 0.002204;
  } else if (leftSelection.value == "ounce" && rightSelection.value == "gram") {
    VALUE = rightValue.value / 28.35;
  }

  // //for lhs is anything and rhs is milligram
  else if (
    leftSelection.value == "Tonne" &&
    rightSelection.value == "milligram"
  ) {
    VALUE = rightValue.value / 1000000000;
  } else if (
    leftSelection.value == "Kilogram" &&
    rightSelection.value == "milligram"
  ) {
    VALUE = rightValue.value / 1000000;
  } else if (
    leftSelection.value == "gram" &&
    rightSelection.value == "milligram"
  ) {
    VALUE = rightValue.value / 1000;
  } else if (
    leftSelection.value == "milligram" &&
    rightSelection.value == "milligram"
  ) {
    VALUE = rightValue.value * 1;
  } else if (
    leftSelection.value == "microgram" &&
    rightSelection.value == "milligram"
  ) {
    VALUE = rightValue.value * 1000;
  } else if (
    leftSelection.value == "imperial tonne" &&
    rightSelection.value == "milligram"
  ) {
    VALUE = rightValue.value / 1016050000;
  } else if (
    leftSelection.value == "us tonne" &&
    rightSelection.value == "milligram"
  ) {
    VALUE = rightValue.value / 907180000;
  } else if (
    leftSelection.value == "stone" &&
    rightSelection.value == "milligram"
  ) {
    VALUE = rightValue.value / 6350000;
  } else if (
    leftSelection.value == "pounds" &&
    rightSelection.value == "milligram"
  ) {
    VALUE = rightValue.value * 0.000002204;
  } else if (
    leftSelection.value == "ounce" &&
    rightSelection.value == "milligram"
  ) {
    VALUE = rightValue.value / 28350;
  }

  // //for lhs is anything and rhs is microgram
  else if (
    leftSelection.value == "Tonne" &&
    rightSelection.value == "microgram"
  ) {
    VALUE = rightValue.value / 1000000000000;
  } else if (
    leftSelection.value == "Kilogram" &&
    rightSelection.value == "microgram"
  ) {
    VALUE = rightValue.value / 1000000000;
  } else if (
    leftSelection.value == "gram" &&
    rightSelection.value == "microgram"
  ) {
    VALUE = rightValue.value / 1000000;
  } else if (
    leftSelection.value == "milligram" &&
    rightSelection.value == "microgram"
  ) {
    VALUE = rightValue.value / 1000;
  } else if (
    leftSelection.value == "imperial tonne" &&
    rightSelection.value == "microgram"
  ) {
    VALUE = rightValue.value / 1016050000000;
  } else if (
    leftSelection.value == "us tonne" &&
    rightSelection.value == "microgram"
  ) {
    VALUE = rightValue.value / 907180000000;
  } else if (
    leftSelection.value == "stone" &&
    rightSelection.value == "microgram"
  ) {
    VALUE = rightValue.value / 6350000000;
  } else if (
    leftSelection.value == "pounds" &&
    rightSelection.value == "microgram"
  ) {
    VALUE = rightValue.value * 0.000000002204;
  } else if (
    leftSelection.value == "ounce" &&
    rightSelection.value == "microgram"
  ) {
    VALUE = rightValue.value / 28350000;
  }

  // for lhs is anything and rhs is imperial tonne
  else if (
    leftSelection.value == "Tonne" &&
    rightSelection.value == "imperial tonne"
  ) {
    VALUE = rightValue.value * 1.01605;
  } else if (
    leftSelection.value == "gram" &&
    rightSelection.value == "imperial tonne"
  ) {
    VALUE = rightValue.value * 101605;
  } else if (
    leftSelection.value == "milligram" &&
    rightSelection.value == "imperial tonne"
  ) {
    VALUE = rightValue.value * 101605000;
  } else if (
    leftSelection.value == "microgram" &&
    rightSelection.value == "imperial tonne"
  ) {
    VALUE = rightValue.value * 101605000000;
  } else if (
    leftSelection.value == "Kilogram" &&
    rightSelection.value == "imperial tonne"
  ) {
    VALUE = rightValue.value * 1016.05;
  } else if (
    leftSelection.value == "us tonne" &&
    rightSelection.value == "imperial tonne"
  ) {
    VALUE = rightValue.value * 1.12;
  } else if (
    leftSelection.value == "stone" &&
    rightSelection.value == "imperial tonne"
  ) {
    VALUE = rightValue.value * 160;
  } else if (
    leftSelection.value == "pounds" &&
    rightSelection.value == "imperial tonne"
  ) {
    VALUE = rightValue.value * 2240;
  } else if (
    leftSelection.value == "ounce" &&
    rightSelection.value == "imperial tonne"
  ) {
    VALUE = rightValue.value * 35840;
  }

  // //for lhs is anything and rhs is us tonne
  else if (
    leftSelection.value == "Tonne" &&
    rightSelection.value == "us tonne"
  ) {
    VALUE = rightValue.value / 1.102;
  } else if (
    leftSelection.value == "gram" &&
    rightSelection.value == "us tonne"
  ) {
    VALUE = rightValue.value * 907185;
  } else if (
    leftSelection.value == "milligram" &&
    rightSelection.value == "us tonne"
  ) {
    VALUE = rightValue.value * 907185000;
  } else if (
    leftSelection.value == "microgram" &&
    rightSelection.value == "us tonne"
  ) {
    VALUE = rightValue.value * 907185000000;
  } else if (
    leftSelection.value == "imperial tonne" &&
    rightSelection.value == "us tonne"
  ) {
    VALUE = rightValue.value / 1016.05;
  } else if (
    leftSelection.value == "Kilogram" &&
    rightSelection.value == "us tonne"
  ) {
    VALUE = rightValue.value * 907.185;
  } else if (
    leftSelection.value == "stone" &&
    rightSelection.value == "us tonne"
  ) {
    VALUE = rightValue.value * 142.957;
  } else if (
    leftSelection.value == "pounds" &&
    rightSelection.value == "us tonne"
  ) {
    VALUE = rightValue.value * 2000;
  } else if (
    leftSelection.value == "ounce" &&
    rightSelection.value == "us tonne"
  ) {
    VALUE = rightValue.value * 32000;
  }

  // //for lhs is anything and rhs is stone
  else if (leftSelection.value == "Tonne" && rightSelection.value == "stone") {
    VALUE = rightValue.value / 1000;
  } else if (leftSelection.value == "gram" && rightSelection.value == "stone") {
    VALUE = rightValue.value * 1000;
  } else if (
    leftSelection.value == "milligram" &&
    rightSelection.value == "stone"
  ) {
    VALUE = rightValue.value * 1000000;
  } else if (
    leftSelection.value == "microgram" &&
    rightSelection.value == "stone"
  ) {
    VALUE = rightValue.value * 1000000000;
  } else if (
    leftSelection.value == "imperial tonne" &&
    rightSelection.value == "stone"
  ) {
    VALUE = rightValue.value / 160;
  } else if (
    leftSelection.value == "us tonne" &&
    rightSelection.value == "stone"
  ) {
    VALUE = rightValue.value / 142.9;
  } else if (
    leftSelection.value == "Kilogram" &&
    rightSelection.value == "stone"
  ) {
    VALUE = rightValue.value * 6.35;
  } else if (
    leftSelection.value == "pounds" &&
    rightSelection.value == "stone"
  ) {
    VALUE = rightValue.value * 14;
  } else if (
    leftSelection.value == "ounce" &&
    rightSelection.value == "stone"
  ) {
    VALUE = rightValue.value * 224;
  }

  // //for lhs is anything and rhs is pounds
  else if (leftSelection.value == "Tonne" && rightSelection.value == "pounds") {
    VALUE = rightValue.value / 2205;
  } else if (
    leftSelection.value == "gram" &&
    rightSelection.value == "pounds"
  ) {
    VALUE = rightValue.value * 453.6;
  } else if (
    leftSelection.value == "milligram" &&
    rightSelection.value == "pounds"
  ) {
    VALUE = rightValue.value * 453600;
  } else if (
    leftSelection.value == "microgram" &&
    rightSelection.value == "pounds"
  ) {
    VALUE = rightValue.value * 453600000;
  } else if (
    leftSelection.value == "imperial tonne" &&
    rightSelection.value == "pounds"
  ) {
    VALUE = rightValue.value / 2240;
  } else if (
    leftSelection.value == "us tonne" &&
    rightSelection.value == "pounds"
  ) {
    VALUE = rightValue.value / 2000;
  } else if (
    leftSelection.value == "stone" &&
    rightSelection.value == "pounds"
  ) {
    VALUE = rightValue.value / 14;
  } else if (
    leftSelection.value == "Kilogram" &&
    rightSelection.value == "pounds"
  ) {
    VALUE = rightValue.value / 2.204;
  } else if (
    leftSelection.value == "ounce" &&
    rightSelection.value == "pounds"
  ) {
    VALUE = rightValue.value * 16;
  }

  // //for lhs is anything and rhs is ounce
  else if (leftSelection.value == "Tonne" && rightSelection.value == "ounce") {
    VALUE = rightValue.value / 35270;
  } else if (leftSelection.value == "gram" && rightSelection.value == "ounce") {
    VALUE = rightValue.value * 28.35;
  } else if (
    leftSelection.value == "milligram" &&
    rightSelection.value == "ounce"
  ) {
    VALUE = rightValue.value * 28350;
  } else if (
    leftSelection.value == "microgram" &&
    rightSelection.value == "ounce"
  ) {
    VALUE = rightValue.value * 28350000;
  } else if (
    leftSelection.value == "imperial tonne" &&
    rightSelection.value == "ounce"
  ) {
    VALUE = rightValue.value / 35840;
  } else if (
    leftSelection.value == "us tonne" &&
    rightSelection.value == "ounce"
  ) {
    VALUE = rightValue.value / 32000;
  } else if (
    leftSelection.value == "stone" &&
    rightSelection.value == "ounce"
  ) {
    VALUE = rightValue.value / 224;
  } else if (
    leftSelection.value == "pounds" &&
    rightSelection.value == "ounce"
  ) {
    VALUE = rightValue.value / 16;
  } else if (
    leftSelection.value == "Kilogram" &&
    rightSelection.value == "ounce"
  ) {
    VALUE = rightValue.value / 35.274;
  }
  leftValue.value = VALUE;
}

let VALUE2 = 1;

function changeRightValue() {
  if (leftSelection.value == rightSelection.value) {
    VALUE2 = leftValue.value;
  } else if (
    leftSelection.value == "Tonne" &&
    rightSelection.value == "Kilogram"
  ) {
    VALUE2 = leftValue.value * 1000;
  } else if (
    leftSelection.value == "gram" &&
    rightSelection.value == "Kilogram"
  ) {
    VALUE2 = leftValue.value / 1000;
  } else if (
    leftSelection.value == "milligram" &&
    rightSelection.value == "Kilogram"
  ) {
    VALUE2 = leftValue.value / 1000000;
  } else if (
    leftSelection.value == "microgram" &&
    rightSelection.value == "Kilogram"
  ) {
    VALUE2 = leftValue.value / 1000000000;
  } else if (
    leftSelection.value == "imperial tonne" &&
    rightSelection.value == "Kilogram"
  ) {
    VALUE2 = leftValue.value * 1016.05;
  } else if (
    leftSelection.value == "us tonne" &&
    rightSelection.value == "Kilogram"
  ) {
    VALUE2 = leftValue.value * 907.18;
  } else if (
    leftSelection.value == "stone" &&
    rightSelection.value == "Kilogram"
  ) {
    VALUE2 = leftValue.value * 6.35;
  } else if (
    leftSelection.value == "pounds" &&
    rightSelection.value == "Kilogram"
  ) {
    VALUE2 = leftValue.value / 2.204;
  } else if (
    leftSelection.value == "ounce" &&
    rightSelection.value == "Kilogram"
  ) {
    VALUE2 = leftValue.value * 0.02835;
  }

  // //for lhs is anything and rhs is tonne
  else if (
    leftSelection.value == "Kilogram" &&
    rightSelection.value == "Tonne"
  ) {
    VALUE2 = leftValue.value / 1000;
  } else if (leftSelection.value == "gram" && rightSelection.value == "Tonne") {
    VALUE2 = leftValue.value / 1000000;
  } else if (
    leftSelection.value == "milligram" &&
    rightSelection.value == "Tonne"
  ) {
    VALUE2 = leftValue.value / 1000000000;
  } else if (
    leftSelection.value == "microgram" &&
    rightSelection.value == "Tonne"
  ) {
    VALUE2 = leftValue.value / 1000000000000;
  } else if (
    leftSelection.value == "imperial tonne" &&
    rightSelection.value == "Tonne"
  ) {
    VALUE2 = leftValue.value * 1.01605;
  } else if (
    leftSelection.value == "us tonne" &&
    rightSelection.value == "Tonne"
  ) {
    VALUE2 = leftValue.value * 0.90718;
  } else if (
    leftSelection.value == "stone" &&
    rightSelection.value == "Tonne"
  ) {
    VALUE2 = leftValue.value * 0.00635;
  } else if (
    leftSelection.value == "pounds" &&
    rightSelection.value == "Tonne"
  ) {
    VALUE2 = leftValue.value / 2204;
  } else if (
    leftSelection.value == "ounce" &&
    rightSelection.value == "Tonne"
  ) {
    VALUE2 = leftValue.value * 0.00002835;
  }

  //for lhs is anything and rhs is gram
  else if (leftSelection.value == "Tonne" && rightSelection.value == "gram") {
    VALUE2 = leftValue.value * 1000000;
  } else if (
    leftSelection.value == "Kilogram" &&
    rightSelection.value == "gram"
  ) {
    VALUE2 = leftValue.value * 1000;
  } else if (
    leftSelection.value == "milligram" &&
    rightSelection.value == "gram"
  ) {
    VALUE2 = leftValue.value / 1000;
  } else if (
    leftSelection.value == "microgram" &&
    rightSelection.value == "gram"
  ) {
    VALUE2 = leftValue.value / 1000000;
  } else if (
    leftSelection.value == "imperial tonne" &&
    rightSelection.value == "gram"
  ) {
    VALUE2 = leftValue.value * 101605;
  } else if (
    leftSelection.value == "us tonne" &&
    rightSelection.value == "gram"
  ) {
    VALUE2 = leftValue.value * 907180;
  } else if (leftSelection.value == "stone" && rightSelection.value == "gram") {
    VALUE2 = leftValue.value * 6350;
  } else if (
    leftSelection.value == "pounds" &&
    rightSelection.value == "gram"
  ) {
    VALUE2 = leftValue.value / 0.002204;
  } else if (leftSelection.value == "ounce" && rightSelection.value == "gram") {
    VALUE2 = leftValue.value * 28.35;
  }

  // //for lhs is anything and rhs is milligram
  else if (
    leftSelection.value == "Tonne" &&
    rightSelection.value == "milligram"
  ) {
    VALUE2 = leftValue.value * 1000000000;
  } else if (
    leftSelection.value == "Kilogram" &&
    rightSelection.value == "milligram"
  ) {
    VALUE2 = leftValue.value * 1000000;
  } else if (
    leftSelection.value == "gram" &&
    rightSelection.value == "milligram"
  ) {
    VALUE2 = leftValue.value * 1000;
  } else if (
    leftSelection.value == "milligram" &&
    rightSelection.value == "milligram"
  ) {
    VALUE2 = leftValue.value / 1;
  } else if (
    leftSelection.value == "microgram" &&
    rightSelection.value == "milligram"
  ) {
    VALUE2 = leftValue.value / 1000;
  } else if (
    leftSelection.value == "imperial tonne" &&
    rightSelection.value == "milligram"
  ) {
    VALUE2 = leftValue.value * 1016050000;
  } else if (
    leftSelection.value == "us tonne" &&
    rightSelection.value == "milligram"
  ) {
    VALUE2 = leftValue.value * 907180000;
  } else if (
    leftSelection.value == "stone" &&
    rightSelection.value == "milligram"
  ) {
    VALUE2 = leftValue.value * 6350000;
  } else if (
    leftSelection.value == "pounds" &&
    rightSelection.value == "milligram"
  ) {
    VALUE2 = leftValue.value / 0.000002204;
  } else if (
    leftSelection.value == "ounce" &&
    rightSelection.value == "milligram"
  ) {
    VALUE2 = leftValue.value * 28350;
  }

  // //for lhs is anything and rhs is microgram
  else if (
    leftSelection.value == "Tonne" &&
    rightSelection.value == "microgram"
  ) {
    VALUE2 = leftValue.value * 1000000000000;
  } else if (
    leftSelection.value == "Kilogram" &&
    rightSelection.value == "microgram"
  ) {
    VALUE2 = leftValue.value * 1000000000;
  } else if (
    leftSelection.value == "gram" &&
    rightSelection.value == "microgram"
  ) {
    VALUE2 = leftValue.value * 1000000;
  } else if (
    leftSelection.value == "milligram" &&
    rightSelection.value == "microgram"
  ) {
    VALUE2 = leftValue.value * 1000;
  } else if (
    leftSelection.value == "imperial tonne" &&
    rightSelection.value == "microgram"
  ) {
    VALUE2 = leftValue.value * 1016050000000;
  } else if (
    leftSelection.value == "us tonne" &&
    rightSelection.value == "microgram"
  ) {
    VALUE2 = leftValue.value * 907180000000;
  } else if (
    leftSelection.value == "stone" &&
    rightSelection.value == "microgram"
  ) {
    VALUE2 = leftValue.value * 6350000000;
  } else if (
    leftSelection.value == "pounds" &&
    rightSelection.value == "microgram"
  ) {
    VALUE2 = leftValue.value / 0.000000002204;
  } else if (
    leftSelection.value == "ounce" &&
    rightSelection.value == "microgram"
  ) {
    VALUE2 = leftValue.value * 28350000;
  }

  // for lhs is anything and rhs is imperial tonne
  else if (
    leftSelection.value == "Tonne" &&
    rightSelection.value == "imperial tonne"
  ) {
    VALUE2 = leftValue.value / 1.01605;
  } else if (
    leftSelection.value == "gram" &&
    rightSelection.value == "imperial tonne"
  ) {
    VALUE2 = leftValue.value / 101605;
  } else if (
    leftSelection.value == "milligram" &&
    rightSelection.value == "imperial tonne"
  ) {
    VALUE2 = leftValue.value / 101605000;
  } else if (
    leftSelection.value == "microgram" &&
    rightSelection.value == "imperial tonne"
  ) {
    VALUE2 = leftValue.value / 101605000000;
  } else if (
    leftSelection.value == "Kilogram" &&
    rightSelection.value == "imperial tonne"
  ) {
    VALUE2 = leftValue.value / 1016.05;
  } else if (
    leftSelection.value == "us tonne" &&
    rightSelection.value == "imperial tonne"
  ) {
    VALUE2 = leftValue.value / 1.12;
  } else if (
    leftSelection.value == "stone" &&
    rightSelection.value == "imperial tonne"
  ) {
    VALUE2 = leftValue.value / 160;
  } else if (
    leftSelection.value == "pounds" &&
    rightSelection.value == "imperial tonne"
  ) {
    VALUE2 = leftValue.value / 2240;
  } else if (
    leftSelection.value == "ounce" &&
    rightSelection.value == "imperial tonne"
  ) {
    VALUE2 = leftValue.value / 35840;
  }

  // //for lhs is anything and rhs is us tonne
  else if (
    leftSelection.value == "Tonne" &&
    rightSelection.value == "us tonne"
  ) {
    VALUE2 = leftValue.value * 1.102;
  } else if (
    leftSelection.value == "gram" &&
    rightSelection.value == "us tonne"
  ) {
    VALUE2 = leftValue.value / 907185;
  } else if (
    leftSelection.value == "milligram" &&
    rightSelection.value == "us tonne"
  ) {
    VALUE2 = leftValue.value / 907185000;
  } else if (
    leftSelection.value == "microgram" &&
    rightSelection.value == "us tonne"
  ) {
    VALUE2 = leftValue.value / 907185000000;
  } else if (
    leftSelection.value == "imperial tonne" &&
    rightSelection.value == "us tonne"
  ) {
    VALUE2 = leftValue.value * 1.12;
  } else if (
    leftSelection.value == "Kilogram" &&
    rightSelection.value == "us tonne"
  ) {
    VALUE2 = leftValue.value / 907.185;
  } else if (
    leftSelection.value == "stone" &&
    rightSelection.value == "us tonne"
  ) {
    VALUE2 = leftValue.value / 142.957;
  } else if (
    leftSelection.value == "pounds" &&
    rightSelection.value == "us tonne"
  ) {
    VALUE2 = leftValue.value / 2000;
  } else if (
    leftSelection.value == "ounce" &&
    rightSelection.value == "us tonne"
  ) {
    VALUE2 = leftValue.value / 32000;
  }

  // //for lhs is anything and rhs is stone
  else if (leftSelection.value == "Tonne" && rightSelection.value == "stone") {
    VALUE2 = leftValue.value * 157.46;
  } else if (leftSelection.value == "gram" && rightSelection.value == "stone") {
    VALUE2 = leftValue.value / 6350;
  } else if (
    leftSelection.value == "milligram" &&
    rightSelection.value == "stone"
  ) {
    VALUE2 = leftValue.value / 6350000;
  } else if (
    leftSelection.value == "microgram" &&
    rightSelection.value == "stone"
  ) {
    VALUE2 = leftValue.value / 6350000000;
  } else if (
    leftSelection.value == "imperial tonne" &&
    rightSelection.value == "stone"
  ) {
    VALUE2 = leftValue.value * 160;
  } else if (
    leftSelection.value == "us tonne" &&
    rightSelection.value == "stone"
  ) {
    VALUE2 = leftValue.value * 142.9;
  } else if (
    leftSelection.value == "Kilogram" &&
    rightSelection.value == "stone"
  ) {
    VALUE2 = leftValue.value / 6.35;
  } else if (
    leftSelection.value == "pounds" &&
    rightSelection.value == "stone"
  ) {
    VALUE2 = leftValue.value / 14;
  } else if (
    leftSelection.value == "ounce" &&
    rightSelection.value == "stone"
  ) {
    VALUE2 = leftValue.value / 224;
  }

  // //for lhs is anything and rhs is pounds
  else if (leftSelection.value == "Tonne" && rightSelection.value == "pounds") {
    VALUE2 = leftValue.value * 2205;
  } else if (
    leftSelection.value == "gram" &&
    rightSelection.value == "pounds"
  ) {
    VALUE2 = leftValue.value / 453.6;
  } else if (
    leftSelection.value == "milligram" &&
    rightSelection.value == "pounds"
  ) {
    VALUE2 = leftValue.value / 453600;
  } else if (
    leftSelection.value == "microgram" &&
    rightSelection.value == "pounds"
  ) {
    VALUE2 = leftValue.value / 453600000;
  } else if (
    leftSelection.value == "imperial tonne" &&
    rightSelection.value == "pounds"
  ) {
    VALUE2 = leftValue.value * 2240;
  } else if (
    leftSelection.value == "us tonne" &&
    rightSelection.value == "pounds"
  ) {
    VALUE2 = leftValue.value * 2000;
  } else if (
    leftSelection.value == "stone" &&
    rightSelection.value == "pounds"
  ) {
    VALUE2 = leftValue.value * 14;
  } else if (
    leftSelection.value == "Kilogram" &&
    rightSelection.value == "pounds"
  ) {
    VALUE2 = leftValue.value * 2.204;
  } else if (
    leftSelection.value == "ounce" &&
    rightSelection.value == "pounds"
  ) {
    VALUE2 = leftValue.value / 16;
  }

  // //for lhs is anything and rhs is ounce
  else if (leftSelection.value == "Tonne" && rightSelection.value == "ounce") {
    VALUE2 = leftValue.value * 35270;
  } else if (leftSelection.value == "gram" && rightSelection.value == "ounce") {
    VALUE2 = leftValue.value * 28.35;
  } else if (
    leftSelection.value == "milligram" &&
    rightSelection.value == "ounce"
  ) {
    VALUE2 = leftValue.value / 28350;
  } else if (
    leftSelection.value == "microgram" &&
    rightSelection.value == "ounce"
  ) {
    VALUE2 = leftValue.value / 28350000;
  } else if (
    leftSelection.value == "imperial tonne" &&
    rightSelection.value == "ounce"
  ) {
    VALUE2 = leftValue.value * 35840;
  } else if (
    leftSelection.value == "us tonne" &&
    rightSelection.value == "ounce"
  ) {
    VALUE2 = leftValue.value * 32000;
  } else if (
    leftSelection.value == "stone" &&
    rightSelection.value == "ounce"
  ) {
    VALUE2 = leftValue.value * 224;
  } else if (
    leftSelection.value == "pounds" &&
    rightSelection.value == "ounce"
  ) {
    VALUE2 = leftValue.value * 16;
  } else if (
    leftSelection.value == "Kilogram" &&
    rightSelection.value == "ounce"
  ) {
    VALUE2 = leftValue.value * 35.274;
  }
  rightValue.value = VALUE2;
}
