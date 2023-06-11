function longest(s1, s2) {
    let longs = (s1 + s2).split('').sort();
    let arr = [];
    for (const n of longs) {
      if (!arr.includes(n)){  
        arr.push(n);  
      }  
    }
    return arr.join('');
  }