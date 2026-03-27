'use strict';

export const restaurantRow = (restaurant) => {
  const {name, company} = restaurant;
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${name}</td>
    <td>${company}</td>
  `;
  return tr;
};

export const restaurantModal = (restaurant, menu) => {
  const {address, postalCode, city, phone, company} = restaurant;

  const restaurantInfo = `
        <h3>${restaurant.name}</h3>
        <p>${address}, ${postalCode}, ${city}</p>
        <p>phone: ${phone}</p>
        <p>company: ${company}</p>
    `;

  let menuHTML = `<div class="menu-container">`;

  menu.courses.forEach((course) => {
    const {diets, name, price} = course;
    const mDiets =
      typeof diets === 'string'
        ? diets.split(',').map((d) => d.trim())
        : Array.isArray(diets)
          ? diets
          : [];

    menuHTML += `
    <div class="course-card">
      <h4>${name}</h4>
      <p class="course-price">${price}</p>
      <div class="course-diets">
        ${
          mDiets.length
            ? mDiets.map((d) => `<span class="diet-tag">${d}</span>`).join('')
            : '<span class="diet-none">No diet info</span>'
        }
      </div>
      </div>
    `;
  });
  menuHTML += `</div>`;
  return restaurantInfo + menuHTML;
};

export const closeButton = (dialog) => {
  const closeBtn = document.createElement('button');
  closeBtn.textContent = 'X';
  closeBtn.classList.add('close-btn');

  // Add event handler to close the modal window
  closeBtn.addEventListener('click', () => {
    dialog.close();
  });

  return closeBtn;
};
