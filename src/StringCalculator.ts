// check if string is empty
function isEmpty(numbers: string): boolean {
    // if string is empty return true
    return numbers === '';
}

// parseDelimiter function
function parseDelimiter(numbers: string): { delimiter: RegExp, numbersString: string } {
    // default delimiter is comma and new line
    const defaultDelimiter = /[,\n]/;

    // if string does not start with // return default delimiter
    if (!numbers.startsWith('//')) {
        return { delimiter: defaultDelimiter, numbersString: numbers };
    }

    // find the end of the delimiter
    const delimiterEndIndex = numbers.indexOf('\n');

    // get custom delimiter
    const customDelimiter = numbers.substring(2, delimiterEndIndex);
    // if custom delimiter is more than one character, use regex to create a new delimiter
    // if custom delimiter is one character, use the character itself
    const delimiter = new RegExp(`[${customDelimiter}\n]`);

    // get the numbers string
    const numbersString = numbers.substring(delimiterEndIndex + 1);

    // return the delimiter and numbers string
    return { delimiter, numbersString };
}

// parse numbers
function parseNumbers(numbersString: string, delimiter: RegExp): number[] {
    // split the numbers string using the delimiter
    // convert the numbers to integers and filter out NaN values
    // return the numbers
    return numbersString.split(delimiter)
        .map(num => parseInt(num))
        .filter(num => !isNaN(num));
}

//  check for negatives
function checkForNegatives(nums: number[]): void {
    // filter the numbers to get the negative numbers

    const negatives = nums.filter(num => num < 0);
    // if there are negative numbers, throw an error
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
    }
}

// sum numbers
function sumNumbers(nums: number[]): number {
    // reduce the numbers to get the sum
    // return the sum
    return nums.reduce((sum, num) => sum + num, 0);
}

export function add(numbers: string): number {
    // if empty string return 0
    if (isEmpty(numbers)) return 0;

    const { delimiter, numbersString } = parseDelimiter(numbers);
    const nums = parseNumbers(numbersString, delimiter);

    checkForNegatives(nums);

    return sumNumbers(nums);
}