export function accum(s: string): string {
    return s
        .split('')
        .map(
            (item, index) =>
                item.toUpperCase() + item.toLowerCase().repeat(index)
        )
        .join('-');
}
