function toCamelCase(str) {
    return str.replace(/[-_](.)/g, (_, s) => s.toUpperCase());
}
