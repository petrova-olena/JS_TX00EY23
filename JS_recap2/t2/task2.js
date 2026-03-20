'use strict';

// Create an array and fill it with numbers from prompt
let numbers = [];
for (let i = 1; i <= 5; i++) {
  const number = Number(prompt('Enter Number ' + i + ': '));
  numbers.push(number);
}

// Output an array
console.log('Numbers: ' + arrayToString(numbers));

// Prompt number and check if it is within the array
const numberToSearch = Number(prompt('Enter a Number to Search:'));
if (numbers.includes(numberToSearch)) {
  console.log('Number ' + numberToSearch + ' is found in the array.');
} else {
  console.log('Number ' + numberToSearch + ' is not found in the array.');
}

// Delete the last number from the array
const lastNumber = numbers.pop();
console.log('Updated Numbers: ' + arrayToString(numbers));

// Sort the array in ascending way
numbers.sort((a, b) => a - b);
console.log('Sorted Numbers: ' + arrayToString(numbers));

// Function to print the array in the needed way
function arrayToString(array) {
  let string = '[';
  for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
      string += array[i] + ']';
    } else {
      string += array[i] + ', ';
    }
  }
  return string;
}
