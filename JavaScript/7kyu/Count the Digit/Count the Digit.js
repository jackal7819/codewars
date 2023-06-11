function nbDig(n, d) {
    let str = '';
    for (let k = 0; k <= n; k++) {
        str += k ** 2;
    }
    return str.split(d).length - 1;
}
