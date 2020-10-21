var answer = prompt("Are we there yet?");
const answerSubstring = "YE";

// while (answer.toUpperCase() !== "YES" && answer.toUpperCase() !== "YEAH" ) {
//  var answer = prompt("Are we there yet?");
//   } 

// alert("YAY!!");

// A kind of hacky way to let it move on to "YAY!!!" if the user enters "yeah" or "yes"

while (! ( answer.toUpperCase().includes( answerSubstring.toUpperCase() ) ) ) {
  var answer = prompt("Are we there yet?")
}

alert("YAY!!!");
