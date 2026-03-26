'use strict';
import fetchData from './fetch.js';
import * as modal from './modal.js';

const apiUrl = 'https://media2.edu.metropolia.fi/restaurant/api/v1';

// Search all restaurants
const getRestaurants = async () => {
  try {
    return await fetchData(apiUrl + '/restaurants');
  } catch (error) {
    console.error(error);
  }
};

// Search daily menu for the chosen restaurant
const getDailyMenu = async (id, lang) => {
  try {
    return await fetchData(apiUrl + `/restaurants/daily/${id}/${lang}`);
  } catch (error) {
    console.error(error);
  }
};

const restaurants = await getRestaurants();

// Sort restaurants by names
restaurants.sort((a, b) => a.name.localeCompare(b.name));

// Add restaurants names and addresses to html
const restaurantsList = document.querySelector('#targetList');

for (const restaurant of restaurants) {
  const tr = document.createElement('tr');

  const tdName = document.createElement('td');
  tdName.textContent = restaurant.name;

  const tdAddress = document.createElement('td');
  tdAddress.textContent = restaurant.address + ', ' + restaurant.city;

  tr.appendChild(tdName);
  tr.appendChild(tdAddress);

  // Add event handler for clicking on the restaurants name and address
  tr.addEventListener('click', async () => {
    // Search for the daily menu for the chosen restaurant
    const dailyMenu = await getDailyMenu(restaurant._id, 'en');
    console.log('DAILY MENU RAW:', dailyMenu);

    // Add highlighting for the chosen restaurant
    document.querySelectorAll('#targetList tr').forEach((row) => {
      row.classList.remove('highlight');
    });
    tr.classList.add('highlight');

    // Find dialog part for the opening of the modal window
    const dialog = document.querySelector('dialog');
    dialog.innerHTML = '';

    // Add restaurant name to the modal window
    dialog.appendChild(modal.renderHeader(restaurant));

    // Add address, postal code and city
    dialog.appendChild(modal.renderInfo(restaurant));

    // Add daily menu
    dialog.appendChild(modal.renderMenu(dailyMenu));

    // Add close button
    dialog.appendChild(modal.closeButton(dialog));

    // Show modal window
    dialog.showModal();
  });

  restaurantsList.appendChild(tr);
}
