var counterOne = -10;
var counterTwo = 10;
var counterThree = 300;
var counterFour = 5;

// Print all numbers between -10 and 19
console.log("Print all numbers between -10 and 19");
while (counterOne <= 19) {
  console.log(counterOne);
  counterOne++;
}
// Print all even numbers between 10 and 40
console.log("Print all even numbers between 10 and 40");
while (counterTwo <= 40) {
  if (counterTwo % 2 === 0) {
    console.log(counterTwo);
  }
  counterTwo++;
}
// Print all odd numbers between 300 and 333
console.log("Print all odd numbers between 300 and 333");
while (counterThree <= 333){
  if (counterThree % 2 !== 0) {
    console.log(counterThree);
  }
  counterThree++;
}

// Print all numbers divisible by 5 AND 3 between 5 and 50
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
while (counterFour <=50){
  if (counterFour % 5 === 0 && counterFour % 3 === 0){
    console.log(counterFour);
  }
  counterFour++;
}