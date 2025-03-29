// StringCalculator.ts
export function add(numbers: string): number {
    // Empty string returns 0
    if (numbers === '') return 0;
    // Single number returns the number itself
    /*
      1. Single number returns the value
      2. Two numbers, comma delimited, returns the sum
      3. handle any amount of numbers, comma delimited
      4. handle newlines between numbers
     */
    const nums = numbers.split(/[,\n]/) // regex to split by comma or newline
        .map(num => parseInt(num));

    return nums.reduce((sum, num) => sum + num, 0);
}