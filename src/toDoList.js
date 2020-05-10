const toDoList = [];
const PENDING = "pending";
const COMPLETE = "completeds";

// function for submitting task to toDoList
function submitTask(event) {
  event.preventDefault();
  let taskName = document.getElementById("task");
  checkHTML(taskName.value);

  if (taskName.value.trim() !== "" && !checkHTML(taskName.value)) {
    let task = createTask(taskName.value);
    toDoList.push(task);
    taskName.value = "";
    addList(task);
  }
}

function checkHTML(text) {
  // this will check html is present or not
  return /<\/?[a-z][\s\S]*>/i.test(text);
}
function enterKeyPress(event) {
  if (event.key === "Enter") {
    submitTask(event);
  }
}

function createTask(taskName) {
  // create a task with following structure
  // {
  //     task: 'text',
  //     status: 'pending/completed'
  // }
  return {
    task: taskName,
    status: PENDING,
    id: Date.now(),
  };
}

function addList(task) {
  // get div containing task list
  let taskList = document.getElementById("taskList");
  // add task list to the div
  let item = document.createElement("p");
  item.innerHTML = `${task.task} <button onclick="deleteTask(event)"> delete </button>`;
  item.id = task.id;
  taskList.appendChild(item);
}

function deleteTask(event) {
  let task = event.target.parentElement; // refers to task paragraph
  document.getElementById(task.id).remove();
  //   if (window.confirm("Delete Task ")) {
  //     document.getElementById(task.id).remove();
  //     //   task.parentElement.removeChild(task); // alternate way
  //   }
}
