function countBy(x, n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i * x);
    }
    return arr;
}