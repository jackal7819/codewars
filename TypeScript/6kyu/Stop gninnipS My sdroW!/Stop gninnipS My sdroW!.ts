export const spinWords = (words: string): string =>
    words
        .split(' ')
        .map((word) =>
            word.length > 4 ? word.split('').reverse().join('') : word
        )
        .join(' ');
