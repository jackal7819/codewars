function persistence(num) {
    let count = 0;
    while (num > 9) {
        num = String(num).split('').reduce(sum = (a, b) => a * b);
        count += 1;
    }
    return count;
}
