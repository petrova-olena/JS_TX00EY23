'use strict';

const x1 = Number(prompt('Input first X-coordinate:'));
const y1 = Number(prompt('Input first Y-coordinate:'));
const x2 = Number(prompt('Input second X-coordinate:'));
const y2 = Number(prompt('Input second Y-coordinate:'));

document.querySelector('#x1').innerHTML = x1;
document.querySelector('#y1').innerHTML = y1;
document.querySelector('#x2').innerHTML = x2;
document.querySelector('#y2').innerHTML = y2;

const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
console.log('Result is: ' + distance);

document.querySelector('#target').innerHTML =
  'The distance between points is: ' + distance.toFixed(2);
