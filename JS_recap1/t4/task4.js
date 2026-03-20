'use strict';

const score = Number(prompt('Enter your course score:'));

document.querySelector('#score').innerHTML = 'Your score is: ' + score;

let grade = 0;

if (score < 0 || score > 100) {
  grade = 'invalid score';
} else if (score >= 88) {
  grade = 5;
} else if (score >= 76) {
  grade = 4;
} else if (score >= 64) {
  grade = 3;
} else if (score >= 52) {
  grade = 2;
} else if (score >= 40) {
  grade = 1;
}

document.querySelector('#grade').innerHTML = 'Your grade is: ' + grade;
