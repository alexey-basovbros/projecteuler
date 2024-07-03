export function multipliesSum(a:number, b:number): (criteria: number) => number {
  return function (criteria: number): number  {
    let sum: number = 0;

    for (let i = 1; i < criteria; i++) {
      if (i % a === 0 || i % b === 0) {
        sum += i;
      }
    }
  
    return sum;
  };
}