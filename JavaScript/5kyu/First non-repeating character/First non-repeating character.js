function firstNonRepeatingLetter(s) {
    const str = s.toLowerCase();
    for (let el of str) {
        if (str.indexOf(el) === str.lastIndexOf(el)) {
            return s[str.indexOf(el)];
        }
    }
    return '';
}
