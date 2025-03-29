// StringCalculator.ts
export function add(numbers: string): number {
    // Empty string returns 0
    if (numbers === '') return 0;
    // Single number returns the number itself
    /*
      1. Single number returns the value
      2. Two numbers, comma delimited, returns the sum
      3. handle any amount of numbers, comma delimited`
     */
    return numbers.split(',')
        .map(num => parseInt(num))
        .reduce((sum, num) => sum + num, 0);
}