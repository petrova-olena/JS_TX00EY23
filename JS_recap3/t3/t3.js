'use strict';

// Find element with id=target
let info = document.querySelector('#target');

// Create p element for the browser name and version
let browser = document.createElement('p');
// Use userAgent for the searching
const ua = navigator.userAgent;
let browserName = '';
let browserVersion = '';

if (ua.includes('Edg/')) {
  browserName = 'Microsoft Edge';
  browserVersion = ua.split('Edg/')[1].split(' ')[0];
} else if (ua.includes('Avast')) {
  browserName = 'Avast';
  browserVersion = ua.split('Avast/')[1].split(' ')[0];
} else if (ua.includes('Chrome/')) {
  browserName = 'Chrome';
  browserVersion = ua.split('Chrome/')[1].split(' ')[0];
} else if (ua.includes('Firefox/')) {
  browserName = 'Firefox';
  browserVersion = ua.split('Firefox/')[1].split(' ')[0];
} else if (ua.includes('Safari')) {
  browserName = 'Safari';
  browserVersion = ua.split('Safari/')[1].split(' ')[0];
} else {
  browserName = 'Unknown browser';
}

// Add browser information to the p element and p element to the html
browser.textContent = browserName + ', version: ' + browserVersion;
info.appendChild(browser);

// Create p element for the operating system name
let os = document.createElement('p');
let osName = '';

if (ua.includes('Windows')) {
  osName = 'Windows' + ua.split('Windows')[1].split(';')[0];
} else if (ua.includes('Mac')) {
  osName = 'MacOS';
} else if (ua.includes('Linux')) {
  osName = 'Linux';
}

// Add OS information to the p element and p element to the html
os.textContent = osName;
info.appendChild(os);

// Create p element for the screen information
let screenInfo = document.createElement('p');

// Add screen information to the p element and p element to the html
screenInfo.textContent =
  'Screen width: ' + screen.width + ' px, height: ' + screen.height + ' px';
info.appendChild(screenInfo);

// Create p element for the available screen space
let availableSpace = document.createElement('p');

// Add available screen space to the p element and p element to the html
availableSpace.textContent =
  'Available screen width: ' +
  screen.availWidth +
  ' px, height: ' +
  screen.availHeight +
  ' px';
info.appendChild(availableSpace);

// Create p elements for the date and time
let dateInfo = document.createElement('p');
let timeInfo = document.createElement('p');

// Create a new date object
const now = new Date();

// Add date to the p element and p element to the html
dateInfo.textContent = now.toLocaleDateString('fi-FI', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});
info.appendChild(dateInfo);

// Add time to the p element and p element to the html
timeInfo.textContent = now.toLocaleTimeString('fi-FI', {
  hour: '2-digit',
  minute: '2-digit',
});
info.appendChild(timeInfo);
