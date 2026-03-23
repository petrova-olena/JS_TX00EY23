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

// For each element in the list
for (const element of todoList) {
  // Create element <li>
  let li = document.createElement('li');

  // Create <input> and its attributes
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.id = `todo-${element.id}`;
  input.checked = element.completed;
  li.appendChild(input);

  // Create <label> and its attributes
  const label = document.createElement('label');
  label.htmlFor = `todo-${element.id}`;
  label.textContent = element.task;
  li.appendChild(label);

  // Add list item to the html
  list.appendChild(li);
}
