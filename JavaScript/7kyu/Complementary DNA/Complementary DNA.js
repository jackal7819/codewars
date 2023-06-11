function DNAStrand(dna){
    dna.split('');
    let nda = [];
    for (const n of dna) {
      if (n === 'A') {
        nda.push('T');
      }
      if (n === 'T') {
        nda.push('A');
      }
      if (n === 'C') {
        nda.push('G');
      }
      if (n === 'G') {
        nda.push('C');
      }
    }
    return nda.join('');
  }