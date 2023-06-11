function pigIt(str) {
    let arr = str.split(' ');
    let result = [];
    for (let el of arr) {
        if (!el.includes('!') && !el.includes('?')) {
            result.push(el.slice(1) + el[0] + 'ay');
        } else result.push(el);
    }
    return result.join(' ');
}