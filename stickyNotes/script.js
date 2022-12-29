const [container] = document.getElementsByClassName("container");

const addNew = document.getElementById("addNewBtn");
addNew.addEventListener("click", function () {
  const note = document.createElement("div");
  note.classList.add("notes");
  note.innerHTML = `
        <div class="options">
          <i class="fas fa-edit edit"></i>
          <i class="fas fa-trash-alt delete"></i>
        </div>

        <div class="hidden noteSection main"></div>

        <textarea name="" class="noteSection " maxlength="800"> </textarea>`;
  container.appendChild(note);

  const editBtn = note.querySelector(".edit");
  const maindiv = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  editBtn.addEventListener("click", function () {
    maindiv.classList.toggle("hidden");
    maindiv.innerHTML = textArea.value;
    textArea.classList.toggle("hidden");
  });
  removeNote();
});

let del = 0;
function removeNote() {
  del = document.querySelectorAll(".delete");

  for (let i = 0; i < del.length; i++) {
    del[i].addEventListener("click", removeNote);
    $(this).parent().parent().remove();
  }
}
removeNote();
