const arr = [1,2,3];

const countAverage = (numbers) => {
  let sum = 0; 
  for (let i = 0; i < numbers.length; i += 1) { 
    sum += numbers[i]; 
  }
  return sum / numbers.length;
};

console.log(countAverage(arr)); 


