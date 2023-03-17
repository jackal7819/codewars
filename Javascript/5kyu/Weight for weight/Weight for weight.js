function sumDigits(number) {
    return number.split('').reduce((a, b) => a + Number(b), 0);
}

function orderWeight(strng) {
    let arr = strng.split(' ');
    arr = arr.sort((a, b) => sumDigits(a) - sumDigits(b) || a.localeCompare(b));
    return arr.join(' ');
}
