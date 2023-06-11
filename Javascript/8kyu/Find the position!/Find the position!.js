function position(letter) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowercaseLetter = letter.toLowerCase();
    const position = alphabet.indexOf(lowercaseLetter) + 1;
    return `Position of alphabet: ${position}`;
}
