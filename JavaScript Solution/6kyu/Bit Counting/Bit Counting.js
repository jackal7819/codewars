function countBits(n) {
    let bit = n.toString(2);
    let count = 0;
    for (const i of bit) {
      if (i.includes(1)) {
        count++;
      }
    }
    return count;
  }