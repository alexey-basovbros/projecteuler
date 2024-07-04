/*
Problem 2
Even Fibonacci Numbers

Each new term in the Fibonacci sequence is generated by adding the previous two terms.
By starting with 1 and 2, the first 10terms will be:

1,2,3,5,8,13,21,34,55,89

By considering the terms in the Fibonacci sequence whose values do not exceed four million,
find the sum of the even-valued terms.
*/

export function summOfEvenFibonachiValues(maxValue: number): number {
  let previosValue = 1;
  let currentValue = 2;
  let summ = currentValue;

  while(currentValue < maxValue) {
    let prev = currentValue;
    currentValue = previosValue + currentValue;
    previosValue = prev;
     
    if (currentValue < maxValue && currentValue %  2 === 0) {
      summ += currentValue;
    }
  };

  return summ;
};