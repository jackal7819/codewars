function maskify(cc) {
    let mask = cc.split('').slice(-4);
    for (let i = 0; i < cc.length - 4; i++) {
      mask.unshift('#');
    }
    return mask.join('');
  }