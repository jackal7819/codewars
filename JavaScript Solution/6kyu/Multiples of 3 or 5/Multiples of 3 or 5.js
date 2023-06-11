function solution(number){
    let numbers = [];
    for (let i = 0; i < number; i++) {
      numbers.push(i);
    }
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 3 === 0 || numbers[i] % 5 === 0) {
        sum += numbers[i];
      }
    }
    return sum;
  }