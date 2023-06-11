const rps = (p1, p2) => {
    const rules = { scissors: 'paper', rock: 'scissors', paper: 'rock' };
    return p1 === p2 ? 'Draw!' : `Player ${rules[p1] === p2 ? 1 : 2} won!`;
};
