export class Kata {
    static getCount(str: string): number {
        let vowelsCount: number = 0;
        for (const i of str) {
            if ('aeiou'.includes(i)) {
                vowelsCount += 1;
            }
        }
        return vowelsCount;
    }
}
