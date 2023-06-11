function count(string) {
    const obj = string.split('').reduce(
        (acc, item) => ({
            ...acc,
            [item]: (acc[item] || 0) + 1,
        }),
        {}
    );
    return obj;
}
