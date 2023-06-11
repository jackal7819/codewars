function scramble(str1, str2) {
    let numItems = {};
    for (const item of str2) {
        if (numItems[item]) numItems[item]++;
        else numItems[item] = 1;
    }
    for (const item of str1) {
        if (numItems[item] && numItems[item] !== 0)
            numItems[item]--;
    }
    for (const key in numItems) {
        if (numItems[key] !== 0) return false;
    }
    return true;
}
