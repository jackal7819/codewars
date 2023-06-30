export function isValidWalk(walk: string[]) {
    const north = walk.filter(item => item === 'n').length;
    const south = walk.filter(item => item === 's').length;
    const east = walk.filter(item => item === 'e').length;
    const west = walk.filter(item => item === 'w').length;
    return north === south && east === west && walk.length === 10;
}
