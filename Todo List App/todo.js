//Creating empty array for todo list
var todos = [];
var input = prompt("What would you like to do?");

//Function to create row of asterisks
const createBar = function() {
  console.log("*".repeat(45));
}
//function addTodo() to add to todo list

const addTodo = function() {
  //ask for new todos
  let newTodo = prompt("Enter new todo: ");
  //add to todos array
  todos.push(newTodo);

}

//function listTodos() to list todo items

const listTodos = function() {

  if (todos.length === 0) {
    createBar();
    console.log("The list is empty. Nothing to list.");
  } else {
    createBar();
    for (let count = 0; count < todos.length; count++) {

      console.log((count + 1) + ". " + todos[count]);

    }
  }
  createBar();
}

//function deleteTodos() to delete from todo list

const deleteTodos = function() {
  listTodos();
  let deleteNumber = prompt("Please enter the todo number to delete: ");
  deleteNumber = parseInt(deleteNumber);
  deleteNumber -= 1;
  todos.splice(deleteNumber, 1);
  console.log("Item " + (deleteNumber + 1) + " deleted.")
  listTodos();

}

//main program loop
while (input !== "quit") {
  if (input === "list") {

    listTodos();

  } else if (input === "new") {

    addTodo();

  } else if (input === "delete") {

    deleteTodos();

  }

  //start the loop over
  input = prompt("What would you like to do?");
}
console.log("You've Quit!");