'use strict';

// Create an array with fruits and find out its length
const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
const fruitsLength = fruits.length;

//Create a string for the correct output
let fruitsToString = '[';
for (let i = 0; i < fruitsLength; i++) {
  if (i != fruitsLength - 1) {
    fruitsToString += '"' + fruits[i] + '", ';
  } else {
    fruitsToString += '"' + fruits[i] + '"]';
  }
}

// Output the array, its length, element with index 2 and the last element
console.log('Fruits: ' + fruitsToString);
console.log('Length of Fruits: ' + fruitsLength);
console.log('Element at Index 2: "' + fruits[2] + '"');
console.log('Last Element of Fruits: "' + fruits[fruitsLength - 1] + '"');

// Create an empty array with vegetables and prompt to user to fiil it
let vegetables = [];
for (let j = 0; j < 3; j++) {
  const vegetable = prompt('Enter the vegetable:');
  vegetables.push(vegetable);
}
// Find out the length of vegetables array
const vegetablesLength = vegetables.length;

// Create a string from vegetables for the correct output
let vegetablesToString = '[';
for (let k = 0; k < vegetablesLength; k++) {
  if (k != vegetablesLength - 1) {
    vegetablesToString += '"' + vegetables[k] + '", ';
  } else {
    vegetablesToString += '"' + vegetables[k] + '"]';
  }
}

// Output the vegetables array and its length
console.log('Vegetables: ' + vegetablesToString);
console.log('Length of Vegetables: ' + vegetablesLength);
