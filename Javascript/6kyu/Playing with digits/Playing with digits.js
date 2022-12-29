function digPow(n, p) {
    let arr = String(n).split('');
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Math.pow(arr[i], p + i);
    }
    return sum % n === 0 ? sum / n : -1;
}