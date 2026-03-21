'use strict';

// Create empty list
let movies = [];

// Add needed amount of movies to the list
const amount = Number(prompt('Enter amount of movies:'));
for (let i = 0; i < amount; i++) {
  const title = prompt('Enter title:');
  const rating = Number(prompt('Enter rating of ' + title + ':'));

  const movie = {
    title: title,
    rating: rating,
  };

  movies.push(movie);
}

// Sort movies in descendent way
movies.sort(function (a, b) {
  return b.rating - a.rating;
});

console.log(movies);

// Output the best movie and list of movies
document.querySelector('#best').innerHTML = movies[0].title;

for (const movie of movies) {
  document.querySelector('#target').innerHTML +=
    `<li>${movie.title}, ${movie.rating}</li>`;
}
