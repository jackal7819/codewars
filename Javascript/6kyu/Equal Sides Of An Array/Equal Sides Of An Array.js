function findEvenIndex(arr) {
    let sumLeft = 0;
    let sumRight = 0;
    for (let i = 0; i < arr.length; i++) {
        sumLeft = arr.slice(0, i).reduce((a, b) => a + b, 0);
        sumRight = arr.slice(i + 1).reduce((a, b) => a + b, 0);
        if (sumLeft === sumRight) {
            return i;
        }
    }
    return -1;
}