function disemvowel(str) {
    let vowel = '';
    for (const i of str) {
      if (!'aeiou'.includes(i.toLowerCase())) {
        vowel += i;
      }
    }
    return vowel;
  }