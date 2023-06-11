function highAndLow(numbers){
    let str = numbers.split(' ');
    return Math.max(...str) + ' ' + Math.min(...str);
  }