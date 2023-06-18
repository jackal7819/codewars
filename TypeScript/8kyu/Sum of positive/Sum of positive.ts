export function positiveSum(arr: number[]): number {
    return arr.filter((num) => num > 0).reduce((acc, cur) => acc + cur, 0);
}
