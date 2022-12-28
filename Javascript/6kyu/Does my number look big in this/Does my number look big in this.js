function narcissistic(value) {
    let numberOfDigits = String(value).length;
    let sum = 0;
    for (i = 0; i < numberOfDigits; i++) {
        sum += Math.pow(String(value).charAt(i), numberOfDigits);
    }
    return sum === value;
}