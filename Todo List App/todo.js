var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do?");

while (input !== "quit") {
  if (input === "list") {
    console.log(todos);
  } else if (input === "new") {
    //ask for new todos
    let newTodo = prompt("Enter new todo: ");
    //add to todos array
    todos.push(newTodo);

  }
  //start the loop over
input = prompt("What would you like to do?");
}
console.log("You've Quit!");