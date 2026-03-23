'use strict';

// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
let list = document.querySelector('#target');

let targetList = '';

for (const element of todoList) {
  targetList += `
    <li>
      <input type="checkbox" id="todo-${element.id}" ${element.completed ? 'checked' : ''}>
      <label for="todo-${element.id}">${element.task}</label>
    </li>`;
}

list.insertAdjacentHTML('afterbegin', targetList);
