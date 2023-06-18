export class Kata {
    static highAndLow(numbers: string): string {
        const nums = numbers.split(' ').map(Number);
        return `${Math.max(...nums)} ${Math.min(...nums)}`;
    }
}
