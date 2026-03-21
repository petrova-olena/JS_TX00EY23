'use strict';

// Function that sorts an array
function sortArray(numbers, order) {
  let newArray = [];
  if (order === 'asc') {
    newArray = numbers.sort((a, b) => a - b);
  } else if (order === 'desc') {
    newArray = numbers.sort((a, b) => b - a);
  }
  return newArray;
}

// Hard-coded array, sorted and printed
const numbers = [5, 2, 8, 1, 9];

console.log(sortArray(numbers, 'asc'));
console.log(sortArray(numbers, 'desc'));
