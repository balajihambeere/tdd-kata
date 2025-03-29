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
      5. support different delimiters
     */
    let delimiter = /[,\n]/; // Default delimiters are comma and newline

    let numsString = numbers;
    // Check for custom delimiter
    // If the string starts with "//", it indicates a custom delimiter
    if (numbers.startsWith('//')) {

        const delimiterEndIndex = numbers.indexOf('\n'); // Find the index of the first newline character

        const customDelimiter = numbers.substring(2, delimiterEndIndex); // Extract the custom delimiter
        delimiter = new RegExp(`[${customDelimiter}\n]`); // Create a regex for the custom delimiter and newline

        // Extract the numbers string after the custom delimiter declaration
        // For example, if the input is "//;\n1;2", this will give "1;2"
        numsString = numbers.substring(delimiterEndIndex + 1); // 
    }

    const nums = numsString.split(delimiter)
        .map(num => parseInt(num));

    return nums.reduce((sum, num) => sum + num, 0);
}