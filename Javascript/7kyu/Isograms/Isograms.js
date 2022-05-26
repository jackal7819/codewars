function isIsogram(str){
    let num = str.toLowerCase().split('');
    let numka = [];
    for (const n of num) {
      if (!numka.includes(n)) {
        numka.push(n);
      }
    }  
    if (numka.length === num.length) {
      return true;
    }
    return false;
  }