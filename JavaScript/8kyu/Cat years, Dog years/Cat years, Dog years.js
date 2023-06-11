const humanYearsCatYearsDogYears = function (humanYears) {
    if (humanYears === 1) {
        return [1, 15, 15];
    }
    let catYears = 15 + 9 + (humanYears - 2) * 4;
    let dogYears = 15 + 9 + (humanYears - 2) * 5;
    return [humanYears, catYears, dogYears];
};
