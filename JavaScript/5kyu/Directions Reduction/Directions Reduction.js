function dirReduc(arr) {
    let str = arr.join('');
    let directions = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/g;
    while (directions.test(str)) {
        str = str.replace(directions, '');
    }
    return str.match(/(NORTH|SOUTH|EAST|WEST)/g) || [];
}
