// Create secret number
const secretNumber = 4;
// ask user for guess
var guess = prompt("Enter a number");
// convert input from string to number
var guessNumber = Number(guess);
// check guess

if (guessNumber === secretNumber) {
  document.body.innerHTML += "<h1>Correct!</h1>";
  // check if higher
} else if (guessNumber > secretNumber) {
  document.body.innerHTML += "<h1>Too high! Guess again!</h1>";
  // otherwise check if lower
} else {
  document.body.innerHTML += "<h1>Too low! Guess again!</h1>";
}
