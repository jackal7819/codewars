export function countBits(num: number): number {
    return num
        .toString(2)
        .split('')
        .filter((item) => item === '1').length;
}
