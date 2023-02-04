function inArray(a1, a2) {
    return a1.filter((el) => a2.join(' ').indexOf(el) !== -1).sort();
}
