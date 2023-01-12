function findMissingLetter(array) {
    let i = array[0].charCodeAt();
    array.map(item => item.charCodeAt() === i ? i++ : i);
    return String.fromCharCode(i);
}