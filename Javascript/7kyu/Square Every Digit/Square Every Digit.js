function squareDigits(num){
    let str = String(num);
    let square = [];
    for (let i = 0; i < str.length; i++) {
      square[i] = str[i] * str[i];
    }
    return Number(square.join(''));
  }