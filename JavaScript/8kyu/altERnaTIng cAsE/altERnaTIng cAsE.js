String.prototype.toAlternatingCase = function () {
    return this.split('')
        .map((el) =>
            el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()
        )
        .join('');
};
