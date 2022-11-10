function isValidWalk(walk) {
    let north = walk.filter((item) => item === 'n').length;
    let south = walk.filter((item) => item === 's').length;
    let east = walk.filter((item) => item === 'e').length;
    let west = walk.filter((item) => item === 'w').length;
    return north === south && east === west && walk.length === 10;
}
