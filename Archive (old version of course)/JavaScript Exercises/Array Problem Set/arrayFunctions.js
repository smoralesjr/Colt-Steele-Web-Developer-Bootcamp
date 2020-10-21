/*
Write a function, printReverse() that takes an array as an argument 
and prints out the elements in the array in reverse order (don't actually reverse the array itself).
*/

const printReverse = function(array) {
  for (let count = array.length - 1; count >= 0; count--) {
    console.log(array[count]);
  }
}

/* This should print out the following:
4
3
2
1
*/
console.log("Reversing [1,2,3,4]");
printReverse([1, 2, 3, 4]);

/* This should print out the following:
c
b
a
*/
console.log('Reversing ["a","b","c"]');
printReverse(["a", "b", "c"])

/* 
Write a function isUniform() which takes an array as an argument
and returns true if all elements in the array are identical.
*/

const isUniform = function(array) {

  let firstElement = array[0];

  for (count = 1; count < array.length; count++) {

    return firstElement === array[count];

  }

}


console.log("This should return 'true'");
console.log(isUniform([1, 1, 1, 1]));

console.log("This should return 'false'");
console.log(isUniform([2, 1, 1, 1]));

console.log("This shoudl return 'false'");
console.log(isUniform(["a", "b", "p"]));

console.log("This should return 'true'");
console.log(isUniform(["b", "b", "b"]));

const sumArray = function(array) {
  var sum = 0;

  for (let count = 0; count < array.length; count++) {
    sum += array[count];
  }
  return sum;
}

console.log("Summing [1,2,3]");
console.log(sumArray([1, 2, 3])); //6

console.log("Summing [10,3,10,4]");
console.log(sumArray([10, 3, 10, 4])); //27

console.log("Summing [-5,100]");
console.log(sumArray([-5, 100])); //95

/*
Write a function max() that accepts an array of numbers and
returns the maximum number in the array
*/

const max = function(array) {
  array.sort(function(a, b) {
    return a - b;
  });
  return array[array.length - 1];
}

console.log("Finding max of [1,2,3]");
console.log(max([1, 2, 3])); //3

console.log("Finding max of [10,3,10,4]");
console.log(max([10, 3, 10, 4])); //10

console.log("Finding max of [-5,100]");
console.log(max([-5, 100])); //100