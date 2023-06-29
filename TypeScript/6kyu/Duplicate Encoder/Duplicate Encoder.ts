export function duplicateEncode(word: string) {
    word = word.toLowerCase();
    return word.replace(/./g, (el) =>
        word.indexOf(el) === word.lastIndexOf(el) ? '(' : ')'
    );
}
