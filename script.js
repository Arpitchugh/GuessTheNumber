'use strict';

// Declare random numbers
let number = Math.floor(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

// Print the random number
// document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess);

  // Loop to check the answer with random number generated
  if (score > 0) {
    if (guess == number) {
      document.querySelector('.message').textContent =
        'Congratulation your answer is right!!';

      if (score < 20) {
        score = score + highscore;
      } else {
        score = 20;
      }
      document.querySelector('.score').textContent = score;
      highscore++;
      document.querySelector('.highscore').textContent = highscore;
      number = Math.floor(Math.random() * 20) + 1;
    } else if (guess > number) {
      document.querySelector('.message').textContent = 'Number is 2 High';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess < number) {
      document.querySelector('.message').textContent = 'Number is 2 Low';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('h1').textContent = 'You Loose';
  }
});

// To activate game Again
document.querySelector('.again').addEventListener('click', function () {
  window.location.reload();
});
