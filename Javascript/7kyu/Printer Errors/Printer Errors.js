function printerError(s) {
    let count = 0;
    for (let el of s) {
        if (el > 'm') {
            count++;
        }
    }
    return `${count}/${s.length}`;
}