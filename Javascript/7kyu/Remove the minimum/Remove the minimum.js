function removeSmallest(numbers) {
    const copy = numbers.slice(0);
    const min = numbers.indexOf(Math.min(...numbers));
    copy.splice(min, 1);
    return copy;
}
