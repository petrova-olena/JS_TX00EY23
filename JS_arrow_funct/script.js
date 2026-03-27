'use strict';

import fetchData from './utils.js';
import * as modal from './components.js';
import apiUrl from './variables.js';

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
  const row = modal.restaurantRow(restaurant);

  // Add event handler for clicking on the restaurants name and address
  row.addEventListener('click', async () => {
    // Search for the daily menu for the chosen restaurant
    const dailyMenu = await getDailyMenu(restaurant._id, 'en');
    console.log('DAILY MENU RAW:', dailyMenu);

    // Add highlighting for the chosen restaurant
    document.querySelectorAll('#targetList tr').forEach((row) => {
      row.classList.remove('highlight');
    });
    row.classList.add('highlight');

    // Find dialog part for the opening of the modal window
    const dialog = document.querySelector('dialog');
    dialog.innerHTML = modal.restaurantModal(restaurant, dailyMenu);

    // Add close button
    dialog.appendChild(modal.closeButton(dialog));

    // Show modal window
    dialog.showModal();
  });

  restaurantsList.appendChild(row);
}
