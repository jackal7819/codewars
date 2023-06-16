export function createPhoneNumber(numbers: (string | number)[]): string {
    numbers[0] = '(' + String(numbers[0]);
    numbers[2] = String(numbers[2]) + ') ';
    numbers[5] = String(numbers[5]) + '-';
    return numbers.join('');
}
