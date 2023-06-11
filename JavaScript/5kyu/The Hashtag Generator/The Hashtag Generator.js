function generateHashtag(str) {
    let result = '#';
    let arr = str.split(' ');
    arr.map((el) => (result += el.charAt(0).toUpperCase() + el.slice(1)));
    return result === '#' || result.length > 140 ? false : result;
}
