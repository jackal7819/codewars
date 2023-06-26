String.prototype.toJadenCase = function () {
    return this.replace(/(?:^|\s)\S/g, (word: string) => word.toUpperCase());
};

interface String {
    toJadenCase(): string;
}
