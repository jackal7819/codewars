function countPositivesSumNegatives(input) {
    let arr = [];
    let sum = 0;
    let count = 0;
    if (!input || input.length === 0) {
      return arr;
    }
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        count++;
      }
      else {
         sum += input[i];
      }
    }
    arr.push(count);
    arr.push(sum);
    return arr;
  }