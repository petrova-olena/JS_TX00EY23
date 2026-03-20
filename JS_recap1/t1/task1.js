'use strict';

const celsius = Number(prompt('Give the temperature in Celsius:'));
console.log('Given temperature is: ' + celsius);

const fahrenheit = (celsius * 9) / 5 + 32;
const kelvin = celsius + 273.15;

console.log('Temperature in fahrenheit: ' + fahrenheit);
console.log('Temperature in Kelvin: ' + kelvin);

document.querySelector('#celsius').innerHTML =
  'Given temperature in Celsius: ' + celsius;
document.querySelector('#fahrenheit').innerHTML =
  'Temperature in fahrenheit: ' + fahrenheit;
document.querySelector('#kelvin').innerHTML =
  'Temperature in Kelvin: ' + kelvin;
