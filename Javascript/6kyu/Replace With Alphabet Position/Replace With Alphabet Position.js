function alphabetPosition(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    text = text.toLowerCase().split('');
    const arr = [];
    for (el of text) {
        if (alphabet.includes(el)) {
            arr.push(alphabet.indexOf(el) + 1);
        }
    }
    return arr.join(' ');
}
