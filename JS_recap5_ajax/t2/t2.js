'use strict';

document.addEventListener('submit', async function (evt) {
  // Prevent the default action.
  evt.preventDefault();

  // Create an object 'data' to which user input from the form is added and the http method is set to POST
  const data = {
    body: JSON.stringify({
      name: document.querySelector('input[name=uName]').value,
      job: document.querySelector('input[name=uJob]').value,
    }),
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'x-api-key': 'reqres_c852916a5cef415ab5a2978c41638858',
    },
  };

  // Send the data
  try {
    // Send data to server and receive a server response
    const response = await fetch('https://reqres.in/api/users', data);
    // If an error occurs, an error message is thrown
    if (!response.ok) throw new Error('Invalid input!');

    // Convert the loaded text JSON to a JavaScript object / array
    const json = await response.json();

    // Print the result to the console
    console.log('result', json);

    // Print result to HTML
    document.querySelector('#target').innerHTML =
      'result: ' + JSON.stringify(json, null, 2);
  } catch (e) {
    console.log('error', e);
  }
});
