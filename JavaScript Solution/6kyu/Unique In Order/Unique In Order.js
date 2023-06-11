const uniqueInOrder = function (iterable) {
    let mar = [];
    if (Array.isArray(iterable)) {
        mar = iterable;
    } else {
        mar = iterable.split('');
    }
    let arr = [];
    for (let i = 0; i < mar.length; i++) {
        if (mar[i] != mar[i + 1]) {
            arr.push(mar[i]);
        }
    }
    return arr;
}