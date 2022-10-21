import utilities from "./utilities";
import ls from "./ls";

document.querySelector('#addBtn').onclick = newTodo;
const todoList = ls.getTodoList();

let i = (todoList.length - 1);

function loadTodos() {
    const todoList = ls.getTodoList();
    todoList.forEach(todo => {
        const el = createTodoElement(todo);
        todoList.push(el);
    });
}

// Display the ToDo List
loadTodos();

function newTodo() {
    const todo = createTodo();
    const todoDiv = createTodoElement(todo);
    addToList(todoDiv);
    todoList.push(todo);
    ls.saveTodo(todo);
}

function createTodo() {
    const input = document.querySelector('#todoInput');
    const newTodo = { id: Date.now(), content: input.value, completed: false }
    input.value = '';
    return newTodo;
}

function createTodoElement(todo) {
    ///todo div 
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //complete btn
    const completeBtn = document.createElement('INPUT');
    completeBtn.setAttribute('type', "checkbox");
    completeBtn.setAttribute('data-completed', todo.completed, 'data-content', todo.content);
    completeBtn.classList.add('complete-btn');
    completeBtn.setAttribute('data-id', todo.id);
    completeBtn.innerText = "Complete";
    completeBtn.onclick = crossedOut;

    //todo content 
    const todoContent = document.createElement('div');
    todoContent.innerText = todo.content;
    todoContent.classList.add('todo-content');

    //delete btn 
    const deleteBtn = document.createElement('button');
    // const deleteBtn = document.querySelector('#delete');  
    deleteBtn.setAttribute('data-id', todo.id);
    deleteBtn.classList.add('todo-delete-btn');
    deleteBtn.innerText = "X";
    deleteBtn.onclick = deleteTodo;

    todoDiv.appendChild(completeBtn);
    todoDiv.appendChild(todoContent);
    todoDiv.appendChild(deleteBtn);
    return todoDiv;
}

function addToList(todoDiv) {
    // add to the document 
    document.querySelector('#todos').appendChild(todoDiv);
}

// Event Handlers 
function deleteTodo(e) {
    const btn = e.currentTarget;
    ls.deleteTodo(btn.getAttribute('data-id'));
    // document.querySelector('#todos').innerHTML = ''; 
    // loadTodos();
}

function crossedOut(e) {
    const btn = e.currentTarget;
    btn.completed = true;
    for (let i = 0; i < todoList.length; i++) {
        if (btn.id === todoList[i]) {
            btn.content = todoList[i].content;

            if (btn.completed === true) {
                btn.content.line = "line-through";
                document.getElementById("todo-content").style.textDecoration = todoList[i].line;
            }
        }
    }

    console.log("completed: " + btn.completed);
    ls.crossedOut(btn.getAttribute('data-completed', 'data-content'));
    // document.querySelector('#todos').innerHTML = ''; 
    // loadTodos();
}
