export function descendingOrder(n: number): number {
    return Number(String(n).split('').sort().reverse().join(''));
}
