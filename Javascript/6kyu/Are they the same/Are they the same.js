function comp(array1, array2) {
    if (array1 === null || array2 === null) {
        return false;
    }
    return array1.map(el => el * el).sort().join('') === array2.sort().join('');
}