function isPangram(string) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let sum = 0;
    for (let i = 0; i < alphabet.length; i++) {
        if (string.toLowerCase().includes(alphabet[i])) {
            sum++;
        }
    }
    return sum === 26;
}