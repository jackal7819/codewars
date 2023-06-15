export function position(letter: string): string {
    const alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
    const lowercaseLetter: string = letter.toLowerCase();
    const position: number = alphabet.indexOf(lowercaseLetter) + 1;
    return `Position of alphabet: ${position}`;
}
