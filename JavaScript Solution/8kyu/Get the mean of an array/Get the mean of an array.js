function getAverage(marks){
    let sum = 0;
    for (const n of marks) {
      sum += n;
    }
    return Math.floor(sum / (marks.length));
  }