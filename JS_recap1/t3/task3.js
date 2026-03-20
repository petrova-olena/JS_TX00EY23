'use strict';

const a = Number(prompt('First side:'));
const b = Number(prompt('Second side:'));
const c = Number(prompt('Third side:'));

document.querySelector('#sides').innerHTML =
  'Lengths of triangles sides: ' + a + ', ' + b + ' and ' + c;

let string = '';
if (a === b && a === c) {
  string = 'equilateral';
} else if (a === b || a === c || b === c) {
  string = 'isosceles';
} else {
  string = 'scalene';
}

document.querySelector('#target').innerHTML = 'Triangle is ' + string;
