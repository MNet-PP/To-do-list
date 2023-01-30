document.querySelector("#push").onclick = function () {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("Please Enter a Task");
  } else {
    document.querySelector("#tasks").innerHTML += `
        <div class ="task">
        <span id = "taskname">
        ${document.querySelector("#newtask input").value}
        </span>
        <button class='delete'>
        <i class="far fa-trash-alt"></i>
        </button>
        </div> `;

    let current_task = document.querySelectorAll(".delete");
    for (const element of current_task) {
      element.onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};
