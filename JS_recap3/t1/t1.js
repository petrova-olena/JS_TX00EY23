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

// Choose the element with id=target (list)
let list = document.querySelector('#target');

//Create an empty string
let targetList = '';

// Add list items to the string
for (const element of todoList) {
  targetList += `
    <li>
      <input type="checkbox" id="todo-${element.id}" ${element.completed ? 'checked' : ''}>
      <label for="todo-${element.id}">${element.task}</label>
    </li>`;
}

// Insert the list to the html document
list.insertAdjacentHTML('afterbegin', targetList);
