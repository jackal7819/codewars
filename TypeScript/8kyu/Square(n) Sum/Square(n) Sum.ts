export function squareSum(numbers: number[]): number {
    return numbers.reduce((acc, cur) => acc + cur ** 2, 0);
}
