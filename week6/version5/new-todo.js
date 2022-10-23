/*==========================================================\\
||                                                          ||
||  TO DO JavaScript File                                   ||
||                                                          ||
\\==========================================================*/

// Import the necessary helper files
// import lStorage from "./ls.js";

let todoTask = document.querySelector("#input");
let todoList = document.querySelector("#tasks");
let addTodo = document.querySelector("#addBtn");

addTodo.addEventListener("click", addTask);

function addTask(event) {
    event.preventDefault();

    // let todoDiv = document.createElement("div");
    // todoDiv.classList.add("task");

    let todoLi = document.createElement("li");
    todoLi.classList.add("task");
    todoLi.innerHTML = '<input type="checkbox" class="checkbox">';
    todoLi.innerText = todoTask.value;
    todoLi.innerHTML = '<p class="close">X</p>';
    todoList.appendChild(todoLi);
}