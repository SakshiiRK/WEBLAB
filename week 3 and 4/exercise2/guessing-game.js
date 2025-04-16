const word = ['F', 'O', 'X'];
let guessed = ['_', '_', '_'];
let guessedLetters = [];
let reward = 0;
let hangmanState = 0;

function guessLetter(letter) {
  if (guessedLetters.includes(letter)) {
    console.log(`You've already guessed "${letter}".`);
    return;
  }

  guessedLetters.push(letter);
  let found = false;
  let hits = 0;
  const rewardThisGuess = Math.floor(Math.random() * 100) + 1;

  word.forEach((l, i) => {
    if (l === letter) {
      guessed[i] = letter;
      found = true;
      hits++;
    }
  });

  console.log(guessed.join(' '));
  if (found) {
    reward += rewardThisGuess * hits;
    console.log(`Correct! You earned $${rewardThisGuess * hits}. Total reward: $${reward}`);
    if (!guessed.includes('_')) {
      console.log(`Congratulations! You guessed the word: ${word.join('')}`);
      console.log(`Your final reward is $${reward}`);
    }
  } else {
    reward -= rewardThisGuess;
    hangmanState++;
    console.log(`Wrong! You lost $${rewardThisGuess}. Current reward: $${reward}`);
    console.log(`Hangman state: ${hangmanState}/6`);
    if (hangmanState >= 6) {
      console.log("Game over! The hangman is complete.");
    }
  }
}