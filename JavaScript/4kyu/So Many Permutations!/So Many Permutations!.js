function permutations(input) {
    if (input.length < 1) {
        return [input];
    }
    const result = new Set();
    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        const remaining = input.slice(0, i) + input.slice(i + 1);
        const perms = permutations(remaining);
        for (let j = 0; j < perms.length; j++) {
            result.add(char + perms[j]);
        }
    }
    return Array.from(result);
}
