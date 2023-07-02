export function persistence(num: number): number {
    let i: number;
    for (i = 0; num > 9; i++) {
        num = String(num)
            .split('')
            .reduce((a, b) => a * Number(b), 1);
    }
    return i;
}
