function rgb(r, g, b) {
    return toHex(r) + toHex(g) + toHex(b);
}

function toHex(x) {
    if (x < 0) return '00';
    if (x > 255) return "FF";
    return ('0' + Number(x).toString(16)).slice(-2).toUpperCase();
}