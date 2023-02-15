function maxSequence(arr) {
    let currentSum = 0;
    let maxSum = 0;
    if (arr.length === 0) {
        return 0;
    }
    arr.forEach((el) => {
        currentSum = Math.max(el, currentSum + el);
        maxSum = Math.max(maxSum, currentSum);
    });
    return maxSum;
}
