
//Start declaring Variables 
const todoInput = document.querySelector (".todo-input");
const todoButton = document.querySelector (".todo-button");
const todoList = document.querySelector (".todo-list");



//Add event Listeners 
todoButton.addEventListener ("click", addTodo);
todoList.addEventListener ("click", deleteCheck);




//Specify/Create Function for adding ToDo
function addToDo (event) {

    //Prevent page from refreshing/submitting
    event.preventDefault ();

    //Create ToDo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //Create Li 
    const newTodo = document.createElement ("li");
    newTodo.innerText = "todoInput.value";
    newTodo.classList.add ("todo-item");
    todoDiv.appendChild (newTodo);

    //Check mark button
    const completedButton = document.createElement ("button");
    completedButton.innerHTML = '<i class = "fas fa-check">';
    completedButton.classList.add ("complete-btn");
    todoDiv.appendChild(completedButton);

    //Create Trash button
    const trashButton = document.createElement ("button");
    trashButton.innerHTML = '<i class = "fas fa-trash">';
    trashButton.classList.add ("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append to List
    todoList.appendChild (todoDiv);
    //This function long sha ooo


    //Clear the Value (todo input)
    todoInput.value = "";
}



//Function to Delete the Values
function deleteCheck (event) {
    const item = e.target;  //e means event 
    //delete Trash button with the click

    if (item.classList [0] === 'trash-btn') {
        const todo = item.parentElement;
        item.remove();
    }

    
    //Checkmark Area
    if (item.classList [0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle ('completed');
    }
}