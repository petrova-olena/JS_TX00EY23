'use strict';

export function renderHeader(restaurant) {
  const h3 = document.createElement('h3');
  h3.textContent = restaurant.name;
  return h3;
}

export function renderInfo(restaurant) {
  const div = document.createElement('div');
  div.innerHTML = `
    <p>${restaurant.address}, ${restaurant.postalCode}, ${restaurant.city}</p>
    <p>phone: ${restaurant.phone}</p>
    <p>company: ${restaurant.company}</p>
  `;
  return div;
}

export function renderMenu(dailyMenu) {
  const div = document.createElement('div');
  div.classList.add('menu-container');

  if (!dailyMenu || !Array.isArray(dailyMenu.courses)) {
    div.textContent = 'No menu available today.';
    return div;
  }

  dailyMenu.courses.forEach((course) => {
    const card = document.createElement('div');
    card.className = 'course-card';

    const diets =
      typeof course.diets === 'string'
        ? course.diets.split(',').map((d) => d.trim())
        : Array.isArray(course.diets)
          ? course.diets
          : [];

    card.innerHTML = `
      <h4>${course.name}</h4>
      <p class="course-price">${course.price}</p>
      <div class="course-diets">
        ${
          diets.length
            ? diets.map((d) => `<span class="diet-tag">${d}</span>`).join('')
            : '<span class="diet-none">No diet info</span>'
        }
      </div>
    `;

    div.appendChild(card);
  });

  return div;
}

export function closeButton(dialog) {
  const closeBtn = document.createElement('button');
  closeBtn.textContent = 'X';
  closeBtn.classList.add('close-btn');

  // Add event handler to close the modal window
  closeBtn.addEventListener('click', () => {
    dialog.close();
  });

  return closeBtn;
}
