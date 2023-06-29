export class Kata {
    static dnaStrand(dna: string): string {
        const match: { [key: string]: string } = {
            A: 'T',
            T: 'A',
            G: 'C',
            C: 'G',
        };
        return Array.from(dna, (item) => match[item]).join('');
    }
}
