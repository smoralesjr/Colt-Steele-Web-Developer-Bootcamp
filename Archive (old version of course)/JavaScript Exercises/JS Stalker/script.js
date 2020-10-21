var firstName = prompt("Please enter your first name:");
var lastName = prompt("Please enter your last name:");
var age = prompt("Please enter your age:");
console.log("Hello " + firstName + " " + lastName + "!");
console.log("You are " + age + " years old!");

document.body.innerHTML += "<p>Hello " + firstName + " " + lastName + "! " + "You are " + age + " years old!</p>"