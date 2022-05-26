function getSum( a,b ) {
    if ( a === b) {
      return a;
    }
    let sum = 0;
    if (a < b) {
      for (let i = 0; i <= b - a; i++) {
        sum += a + i;
      }
      return sum;
    }
    if (b < a) {
      for (let i = 0; i <= a - b; i++) {
        sum += b + i;
      }
      return sum;
    }
  }