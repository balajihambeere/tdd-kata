// StringCalculator.ts
export function add(numbers: string): number {
    // Empty string returns 0
    if (numbers === '') return 0;
    // Single number returns the number itself
    return parseInt(numbers);
}