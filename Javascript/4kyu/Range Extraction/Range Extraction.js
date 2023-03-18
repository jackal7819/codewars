function solution(list) {
    let result = '';
    let start = list[0];
    let end = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i] === end + 1) {
            end = list[i];
        } else {
            if (result.length > 0) result += ',';
            if (start === end) {
                result += start.toString();
            } else if (end === start + 1) {
                result += start.toString() + ',' + end.toString();
            } else {
                result += start.toString() + '-' + end.toString();
            }
            start = end = list[i];
        }
    }
    if (result.length > 0) result += ',';
    if (start === end) {
        result += start.toString();
    } else if (end === start + 1) {
        result += start.toString() + ',' + end.toString();
    } else {
        result += start.toString() + '-' + end.toString();
    }
    return result;
}
