function isSquare(n){
    if (n < 0) {
      return false;
    }
    if (Number.isInteger(Math.sqrt(Math.abs(n)))) {
      return true;
    }
    return false;
  }