export class Kata {
    static squareDigits(num: number): number {
        let str: string = String(num);
        let square: number[] = [];
        for (let i = 0; i < str.length; i++) {
            square[i] = Number(str[i]) * Number(str[i]);
        }
        return Number(square.join(''));
    }
}
