import readlineSync from 'readline-sync';

console.log('brain-gcd\n');
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!\n`);
console.log('Find the greatest common divisor of given numbers.');

let correctAnswers = 0;
let wrongAnswer = false;

while (correctAnswers < 3 && !wrongAnswer) {
  const number1 = Math.floor(Math.random() * 100) + 1;
  const number2 = Math.floor(Math.random() * 100) + 1;
  const gcd = calculateGCD(number1, number2);

  console.log(`Question: ${number1} ${number2}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (Number(userAnswer) === gcd) {
    console.log('Correct!');
    correctAnswers++;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gcd}'.`);
    console.log(`Let's try again, ${name}!`);
    wrongAnswer = true;
  }
}

if (!wrongAnswer) {
  console.log(`Congratulations, ${name}!`);
}

function calculateGCD(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

export default calculateGCD;