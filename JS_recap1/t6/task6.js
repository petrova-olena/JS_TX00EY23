'use strict';

const range = Number(prompt('Enter a positive integer:'));

if (!Number.isInteger(range) || range <= 0) {
  document.querySelector('#target').innerHTML =
    'Number should be a positive integer!';
} else {
  document.querySelector('#target').innerHTML =
    'Enter a positive integer: ' + range;

  const table = document.querySelector('#table');

  for (let i = 1; i <= range; i++) {
    const row = document.createElement('tr');
    for (let j = 1; j <= range; j++) {
      const cell = document.createElement('td');
      cell.textContent = i * j;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}
