function duplicateCount(text){
    let sum = 0;
    let textN = text.toLowerCase();
    for (let i = 0; i < textN.length; i++) {
      if (textN.split(textN[i]).length - 1 > 1 && !textN.slice(i + 1).includes(textN[i])) {
        sum++;
      }
    }
    return sum;
  }