import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!\n`);
console.log('What number is missing in the progression?');

let correctAnswers = 0;
let wrongAnswer = false;

while (correctAnswers < 3 && !wrongAnswer) {
  const progressionLength = Math.floor(Math.random() * 6) + 5;
  const hiddenIndex = Math.floor(Math.random() * progressionLength);
  const progression = generateProgression(progressionLength, hiddenIndex);

  console.log(`Question: ${progression.join(' ').replace(progression[hiddenIndex], '..')}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (Number(userAnswer) === progression[hiddenIndex]) {
    console.log('Correct!');
    correctAnswers++;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${progression[hiddenIndex]}'.`);
    console.log(`Let's try again, ${name}!`);
    wrongAnswer = true;
  }
}

if (!wrongAnswer) {
  console.log(`Congratulations, ${name}!`);
}

function generateProgression(length, hiddenIndex) {
  const progression = [];
  let currentNumber = Math.floor(Math.random() * 100) + 1;
  const difference = Math.floor(Math.random() * 10) + 1;

  for (let i = 0; i < length; i++) {
    if (i === hiddenIndex) {
      progression.push(currentNumber);
    } else {
      progression.push(currentNumber);
      currentNumber += difference;
    }
  }

  return progression;
}

export default generateProgression;