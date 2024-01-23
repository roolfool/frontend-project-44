import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

const generateRandomNumber = () => Math.floor(Math.random() * 100);

const askQuestion = (num) => readlineSync.question(`Question: ${num}\nYour answer: `);

const checkAnswer = (num, answer) => {
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

const playGame = (name) => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const randomNumber = generateRandomNumber();
    const userAnswer = askQuestion(randomNumber);
    if (checkAnswer(randomNumber, userAnswer)) {
      correctAnswersCount += 1;
    } else {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default function nameAsk() {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question('May I have your name? ');
  console.log("Hello " + name + "!");
  playGame(name);
}