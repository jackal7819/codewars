function rot13(message) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const result = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';
    return message.replace(/[a-z]/gi, (el) => result[alphabet.indexOf(el)]);
}
