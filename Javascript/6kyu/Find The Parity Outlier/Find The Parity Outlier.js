function findOutlier(integers){
    let countOdd = 0;
    let countEven = 0;
    for (const n of integers) {
      if (Math.abs(n % 2) === 1) {
        countOdd++;
      }
      if (n % 2 === 0) {
        countEven++;
      }
    }
    if (countOdd === 1) {
      for (const n of integers) {
        if (Math.abs(n % 2) === 1) {
          return n;
        }
      }
    }
    if (countEven === 1) {
      for (const n of integers) {
        if (n % 2 === 0) {
          return n;
        }
      }
    }
  }