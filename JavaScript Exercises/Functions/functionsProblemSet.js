//function to test if a number is even or not;

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log("This should show as true:");
console.log(isEven(2));

console.log("This should show as false:");
console.log(isEven(87));

//function to compute the factorial of a number.

function factorial(number) {
  var myArray = [number];

  if (number === 0) {
    return 1;
  } else {
    for (let count = number - 1; count > 0; count--) {
      myArray.push(count);
    }

var answer = myArray.shift();

for ( let count = myArray.length; count > 0; count -- ){

answer = answer * myArray.shift();

}
   
    return answer;
  }
}

console.log("This should be 120");
console.log(factorial(5));

console.log("This should be 2");
console.log(factorial(2));

console.log("This should be 3628800");
console.log(factorial(10));

console.log("This should be 1");
console.log(factorial(0));

//function to replace kabab case with snake case

function kebabToSnake (str) {
  var res = str.replace(/-/g, "_");
  return res;
}

console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("dogs-are-awesome"));
console.log(kebabToSnake("blah"));