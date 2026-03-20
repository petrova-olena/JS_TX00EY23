'use strict';

const integer = Number(prompt('Enter a positive integer:'));
let message = '';
let sum = 0;

if (!Number.isInteger(integer) || integer < 0) {
  message = 'Incorrect input. Number should be a positive integer.';
} else {
  for (let i = 1; i <= integer; i++) {
    sum += i;
  }
  message = 'Sum of all the natural numbers: ' + sum;
}

console.log(sum);

document.querySelector('#target').innerHTML = message;
