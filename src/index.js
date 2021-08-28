document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const taskForm = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");

  taskForm.addEventListener('submit', handleSubmit);

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = document.querySelector("#new-task-description").value
    taskList.innerHTML +=
    `<li>${newTask}
    <button data-action="delete">X</button></li>`

    taskForm.reset();
  }

  taskList.addEventListener('click', handleClick)

  function handleClick(e){
    if (e.target.dataset.action === "delete") {
      e.target.parentElement.remove()
    }
  }
});

