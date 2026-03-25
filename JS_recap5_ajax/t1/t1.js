'use strict';

async function showInfo() {
  try {
    const response = await fetch('https://reqres.in/api/users/1', {
      headers: {
        'x-api-key': 'reqres_c852916a5cef415ab5a2978c41638858',
      },
    });
    if (!response.ok) throw new Error('Invalid input!');
    const info = await response.json();

    let p = document.querySelector('#target');
    p.textContent = JSON.stringify(info, null, 2);
  } catch (error) {
    console.log(error.message);
  }
}

showInfo();
