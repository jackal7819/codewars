function zeros(n) {
    let trailingZeros = 0;
    const kMax = Math.log(n) / Math.log(5);
    for (let k = 1; k <= kMax; k++) {
        trailingZeros += Math.floor(n / Math.pow(5, k));
    }
    return trailingZeros;
}
