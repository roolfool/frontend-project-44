import readlineSync from 'readline-sync';
import getName from './cli.js';
import gameEvenOrNo from './gameBody/even.js';
import gameCalculator from './gameBody/calc.js';
import gameFindGCD from './gameBody/gcd.js';
import gameProgression from './gameBody/progression.js';
import gameIsPrime from './gameBody/prime.js';

export default function gameBrain(game) {
  console.log('Welcome to the Brain Games!');
  const name = getName();
  const times = 3;
  let func;
  switch (game) {
    case 'even':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      func = () => gameEvenOrNo();
      break;
    case 'calc':
      console.log('What is the result of the expression?');
      func = () => gameCalculator();
      break;
    case 'gcd':
      console.log('Find the greatest common divisor of given numbers.');
      func = () => gameFindGCD();
      break;
    case 'progression':
      console.log('What number is missing in the progression?');
      func = () => gameProgression();
      break;
    case 'prime':
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      func = () => gameIsPrime();
      break;
    default:
      return;
  }
  for (let i = 0; i < times; i += 1) {
    const [question, correct] = func();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === String(correct)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
