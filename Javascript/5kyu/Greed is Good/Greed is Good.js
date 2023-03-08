function score(dice) {
    let points = 0;
    for (let i = 1; i <= 6; i++) {
        let lengthDice = dice.filter((el) => el === i).length;
        if (i === 1 || i === 5) {
            lengthDice < 3
                ? (points += lengthDice * (i === 1 ? 100 : 50))
                : (points +=
                      (i === 1 ? 1000 : 500) +
                      (lengthDice - 3) * (i === 1 ? 100 : 50));
        } else {
            lengthDice > 2 ? (points += i * 100) : (points += 0);
        }
    }
    return points;
}
