function sumArray(arr) {
    if (!arr || arr.length <= 1) {
        return 0;
    }
    const sortedArr = arr.sort(function (a, b) {
        return a - b;
    });
    const sum = sortedArr.slice(1, -1).reduce(function (acc, val) {
        return acc + val;
    }, 0);
    return sum;
}
