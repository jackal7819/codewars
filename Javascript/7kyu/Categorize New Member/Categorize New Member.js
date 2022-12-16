function openOrSenior(data) {
    const members = [];
    for (let i = 0; i < data.length; i++) {
        members[i] = data[i][0] > 54 && data[i][1] > 7 ? 'Senior' : 'Open';
    }
    return members;
}