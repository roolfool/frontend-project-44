export default function gameCalculator() {
    const operation = ['+', '-', '*'];
    const randomNum = Math.round(Math.random() * 100);
    const randomNum2 = Math.round(Math.random() * 100);
    const randomOperation = Math.round(Math.random() * 2);
    let correct;
    switch (operation[randomOperation]) {
      case '+':
        correct = randomNum + randomNum2;
        break;
      case '-':
        correct = randomNum - randomNum2;
        break;
      case '*':
        correct = randomNum * randomNum2;
        break;
      default:
        return undefined;
    }
    console.log(`${randomNum} ${operation[randomOperation]} ${randomNum2}`, correct);
  }