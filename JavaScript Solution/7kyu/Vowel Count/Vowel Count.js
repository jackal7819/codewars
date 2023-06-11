function getCount(str) {
    let vowelsCount = 0;
    for (const i of str) {
      if ('aeiou'.includes(i)) {
        vowelsCount += 1;
      }
    }   
    return vowelsCount;
  }