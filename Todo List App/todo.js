var todos = ["Buy New Turtle"];
var input = prompt("What would you like to do?");

const listTodos = function() {
  console.log("**********");
  for (let count = 0; count < todos.length; count++) {

    console.log((count + 1) + ". " + todos[count]);

  }
  console.log("**********");
}

while (input !== "quit") {
  if (input === "list") {
    listTodos();
  } else if (input === "new") {
    //ask for new todos
    let newTodo = prompt("Enter new todo: ");
    //add to todos array
    todos.push(newTodo);

  } else if (input === "delete") {

    listTodos();
    let deleteNumber = prompt("Please enter the todo number to delete: ");
    deleteNumber = parseInt(deleteNumber);
    deleteNumber -= 1;
    todos.splice(deleteNumber, 1);
    listTodos();
  }

  //start the loop over
  input = prompt("What would you like to do?");
}
console.log("You've Quit!");