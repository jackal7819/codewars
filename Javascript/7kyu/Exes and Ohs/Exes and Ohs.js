function XO(str) {
    let arr = str.toLowerCase().split('');
    let countx = 0;
    let counto = 0; 
    for (const n of arr) {
      if (n === 'x') {
        countx++;
      }
      if (n === 'o') {
        counto++;
      }
    }
    if (countx === counto) {
      return true;
    }
    return false;
  }