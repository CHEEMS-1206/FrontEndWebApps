// using the jquerry

const removeBtn = document.getElementById("deleteTask");
const addNewBtn = document.getElementById("addNewTask");

const cancelBtn = document.getElementById("resetBtn");
const addBtn = document.getElementById("submitBtn");

const container = document.querySelector(".container");
const overlay = document.querySelector(".overlay");

const taskBody = $(".taskContainer").clone();

let idGiver = 1;
addNewBtn.addEventListener("click", function () {
  //   overlay.style.display = "flex";
  overlay.style.transform = "translateY(0px)";
  container.classList.add("pointingNone");
  addNewBtn.style.display = "none";
});
cancelBtn.addEventListener("click", function () {
  //   overlay.style.display = "none";
  overlay.style.transform = "translateY(-300%)";
  container.classList.remove("pointingNone");
  addNewBtn.style.display = "inline";
});
addBtn.addEventListener("click", function () {
  //   overlay.style.display = "none";
  let TKBD = taskBody.clone().attr("id", `t${(idGiver += 1)}`);
  if (
    document.querySelector(`#headText`).value &&
    document.querySelector(`#paraText`).value
  ) {
    container.prepend(TKBD[0]);
    document.querySelector(`#t${idGiver} div h1`).innerText =
      document.querySelector(`#headText`).value;
    document.querySelector(`#headText`).value = "";
    document.querySelector(`#t${idGiver} div p`).innerText =
      document.querySelector(`#paraText`).value;
    document.querySelector(`#paraText`).value = "";
  } else {
    alert("Heading or relevent details are missing!!!!...");
  }
  overlay.style.transform = "translateY(-300%)";
  container.classList.remove("pointingNone");
  addNewBtn.style.display = "inline";
  removeFn();
});

let remove = document.querySelectorAll(".deleteTask");

function removeFn() {
  remove = document.querySelectorAll(".deleteTask");
  console.log(remove.length);

  for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener("click", function () {
      // console.log($(remove[i]).parent().parent());
      // if (i == this) {
      $(this).parent().parent().remove();
      // }
    });
  }
}

for (let i = 0; i < remove.length; i++) {
  remove[i].addEventListener("click", function () {
    $(this).parent().parent().remove();
  });
}
