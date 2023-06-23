export function getMiddle(s: string) {
    return s.length % 2 === 1
        ? s[Math.ceil(s.length / 2 - 1)]
        : s[s.length / 2 - 1] + s[s.length / 2];
}
