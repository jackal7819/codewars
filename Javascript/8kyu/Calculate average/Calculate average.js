function find_average(array) {
    if (array.length === 0) {
      return 0;
    }
    let sum = 0;
    for (const n of array) {
      sum += n;
    }
    return sum / array.length;
  }