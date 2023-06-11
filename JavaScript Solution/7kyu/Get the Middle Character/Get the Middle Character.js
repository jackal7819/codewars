function getMiddle(s) {
    if (s.length % 2 === 1) {
      return s[Math.ceil(s.length / 2 - 1)];
    }
    if (s.length % 2 === 0) {
      return s[s.length / 2 - 1] + s[s.length / 2];
    }
  }