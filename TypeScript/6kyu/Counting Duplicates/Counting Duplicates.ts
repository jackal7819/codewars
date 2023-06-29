export function duplicateCount(text: string): number {
    const items = text.toLowerCase();
    const distinctItems = [...new Set(items)];
    const count = (s: string) => items.split(s).length - 1 > 1;
    return distinctItems.filter((value) => count(value)).length;
}
