function solution(str) {
    if (str.length % 2 === 1) {
        str = str + '_';
    }
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            arr.push(str[i] + str[i + 1])
        }
    }
    return arr;
}