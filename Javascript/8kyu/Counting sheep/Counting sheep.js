function countSheeps(arrayOfSheep) {
    let number = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
      if (arrayOfSheep[i] === true) {
        number += 1;
      }
    }
    return number;
  }