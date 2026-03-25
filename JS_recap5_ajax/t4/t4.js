'use strict';

// Create a function for the data fetching
async function fetchData(url, options) {
  try {
    const response = await fetch(url, options);
    if (!response.ok)
      throw new Error(`Request failed with status ${response.status}`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
    // Throw error to the next function
    throw error;
  }
}

// Create async function for the testing fetchData
async function test() {
  try {
    const user = {
      name: 'John Doe',
      job: 'Developer',
    };
    const url = 'https://reqres.in/api/users';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres_c852916a5cef415ab5a2978c41638858',
      },
      body: JSON.stringify(user),
    };
    const userData = await fetchData(url, options);
    console.log(userData);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

test();
