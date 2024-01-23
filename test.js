import gameCalculator from './brain-calc.js';

const [question, correctAnswer] = gameCalculator();
console.log(`Question: ${question}`);
console.log(`Correct answer: ${correctAnswer}`);