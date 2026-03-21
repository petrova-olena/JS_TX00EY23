'use strict';

// Function that sorts an array
function sortArray(array) {
  const newArray = array.sort((a, b) => a - b);
  return newArray;
}

// Hard-coded array, sorted and printed
const testArray = [10, 5, 43, 1, 9, 3];
sortArray(testArray);

console.log('Result: ' + testArray);
