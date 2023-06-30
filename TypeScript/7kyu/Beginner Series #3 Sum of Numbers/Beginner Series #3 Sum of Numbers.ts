export function getSum(a: number, b: number): number {
    const start = Math.min(a, b);
    const end = Math.max(a, b);
    return ((end - start + 1) * (start + end)) / 2;
}
