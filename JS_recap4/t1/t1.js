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

// Add todoList items to the screen
todoList.forEach((item, index) => {
  addLiItem(index, item.completed, item.task);
});

// Function to add list item with delete button and event handlers
function addLiItem(index, checked, task) {
  // Create element <li>
  let li = document.createElement('li');

  // Create <input> and its attributes
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.id = `todo-${index + 1}`;
  input.checked = checked;

  // Add event handler for the checkbox
  input.addEventListener('change', function () {
    // Change the completed property
    todoList[index].completed = input.checked;

    // Output changes to see that it works
    console.log(
      `Changed: ${input.id}, new value: ${todoList[index].completed}`
    );
  });

  li.appendChild(input);

  // Create <label> and its attributes
  const label = document.createElement('label');
  label.htmlFor = `todo-${index + 1}`;
  label.textContent = task;
  li.appendChild(label);

  // Add delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Del';

  // Add delete event handler
  deleteBtn.addEventListener('click', () => {
    // Search element with current task, because indexes can change
    const currentTask = task;
    const i = todoList.findIndex((item) => item.task === currentTask);

    // Remove an element with current task from the list
    todoList.splice(i, 1);
    list.removeChild(li);
    console.log(todoList);
  });

  li.appendChild(deleteBtn);

  // Add list item to the html
  list.appendChild(li);
}

// Search element with the modal window and add button
const dialog = document.querySelector('dialog');
const form = document.querySelector('form');
const newTask = dialog.querySelector('input[placeholder]');
const addBtn = document.querySelector('.add-btn');

// Add event handler to open the modal window
addBtn.addEventListener('click', () => {
  dialog.showModal();
});

// Add event handler to save list element when add button is clicked
form.addEventListener('submit', (e) => {
  // Avoid page reloading
  e.preventDefault();

  // Take the text from the placeholder
  const text = newTask.value.trim();

  // Get next index for correct saving to the list
  let nextIndex = todoList.length;

  // Save element to the array
  todoList.push({
    id: nextIndex + 1,
    task: text,
    completed: false,
  });

  // Add element to the html
  addLiItem(nextIndex, false, text);

  // Clear placeholder and close the modal window
  newTask.value = '';
  dialog.close();

  // Output the updated list
  console.log(todoList);
});
