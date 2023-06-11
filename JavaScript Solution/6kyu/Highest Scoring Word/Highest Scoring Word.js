function high(str) {
    let arrScore = str.split(' ').map(e => [...e].reduce((a, b) => a + b.charCodeAt() - 96, 0));
    return str.split(' ')[arrScore.indexOf(Math.max(...arrScore))];
}