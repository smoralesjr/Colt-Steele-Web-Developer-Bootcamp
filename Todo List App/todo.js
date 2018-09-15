var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do?");

while (input !== "quit") {
  if (input === "list") {

    for (let count = 0; count < todos.length; count++) {

      console.log(todos[count]);

    }

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