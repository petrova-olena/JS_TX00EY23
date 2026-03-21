'use strict';

// Create empty array and variable for number
let numbers = [];
let number = '';

// Ask user for numbers and add them to the array
while (true) {
  number = prompt('Enter a number (or "done" to finish): ');
  if (number === 'done') break;
  numbers.push(number);
}

// Create target line and counter to check, if in array even numbers
let targetLine = 'Even Numbers: ';
let count = 0;

for (const num of numbers) {
  if (Number(num) % 2 === 0) {
    if (count === 0) {
      targetLine += num;
      count++;
    } else {
      targetLine += ', ' + num;
      count++;
    }
  }
}

// If in the array no even numbers
if (count === 0) {
  targetLine += 'None';
}

// Print line to the html
document.querySelector('#target').innerText = targetLine;
