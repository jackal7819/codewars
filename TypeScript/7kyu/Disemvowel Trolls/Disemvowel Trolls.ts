export class Kata {
    static disemvowel(str: string): string {
        let vowel: string = '';
        for (const i of str) {
            if (!'aeiou'.includes(i.toLowerCase())) {
                vowel += i;
            }
        }
        return vowel;
    }
}
