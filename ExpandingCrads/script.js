let image1 = document.getElementById("img-1");
let image2 = document.getElementById("img-2");
let image3 = document.getElementById("img-3");
let image4 = document.getElementById("img-4");
let image5 = document.getElementById("img-5");
let image6 = document.getElementById("img-6");

image1.addEventListener("click", changeAnimation);
image2.addEventListener("click", changeAnimation);
image3.addEventListener("click", changeAnimation);
image4.addEventListener("click", changeAnimation);
image5.addEventListener("click", changeAnimation);
image6.addEventListener("click", changeAnimation);

function changeAnimation() {
  let [preActive] = document.getElementsByClassName("default");

  if (!this.classList.contains("default")) {
    this.classList.add("active");
    this.classList.add("default");
    this.classList.remove("inactive");

    let headRem = this.firstElementChild;

    preActive.classList.remove("active");
    preActive.classList.remove("default");
    preActive.classList.add("inactive");

    let headAdd = preActive.firstElementChild;
    headAdd.classList.remove("heading-visibility");
    headAdd.classList.add("heading-invisibility");

    setTimeout(fun, 1000);
    function fun() {
      headRem.classList.add("heading-visibility");
      headRem.classList.remove("heading-invisibility");
    }
  }
}
