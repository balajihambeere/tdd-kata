// check if string is empty
function isEmpty(numbers: string): boolean {
    // if string is empty return true
    return numbers === '';
}

//  parse the delimiters
function parseDelimiters(numbers: string): { delimiters: RegExp, numbersString: string } {
    // check if the string starts with //
    // if it does not, return the default delimiters
    if (!numbers.startsWith('//')) {
        return { delimiters: /[,\n]/, numbersString: numbers };
    }
    // find the end of the delimiter section
    const delimiterEndIndex = numbers.indexOf('\n');

    // extract the delimiter section
    const delimiterSection = numbers.substring(2, delimiterEndIndex);

    // Handle single custom delimiter (simple case)
    if (!delimiterSection.startsWith('[')) {
        // escape special characters
        const customDelimiter = escapeRegExp(delimiterSection);
        // return the delimiter and the numbers
        return {

            delimiters: new RegExp(`[${customDelimiter}\n]`),
            numbersString: numbers.substring(delimiterEndIndex + 1)
        };
    }

    // Handle multiple delimiters in brackets
    // to store the delimiters
    const delimiterPatterns: string[] = [];

    // to track the current position in the delimiter section
    let currentPos = 0;

    // loop through the delimiter section
    // check if current position is less than the length of the delimiter section
    while (currentPos < delimiterSection.length) {
        // check if the current character is [

        if (delimiterSection[currentPos] === '[') {
            // if it is, find the closing bracket ]
            const endPos = delimiterSection.indexOf(']', currentPos); // 
            if (endPos === -1) break; // if no closing bracket is found, break the loop
            // escape the delimiter and add it to the array
            const delimiter = escapeRegExp(delimiterSection.substring(currentPos + 1, endPos));
            // add the delimiter to the array
            delimiterPatterns.push(delimiter);
            // move the current position to the end of the closing bracket
            currentPos = endPos + 1;
        } else {
            // move to the next character
            currentPos++;
        }
    }
    // return the delimiters and the numbers
    return {
        delimiters: new RegExp(`[${delimiterPatterns.join('')}\n]`),
        numbersString: numbers.substring(delimiterEndIndex + 1)
    };
}

// escape special characters
function escapeRegExp(string: string): string {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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

    const { delimiters, numbersString } = parseDelimiters(numbers);
    const nums = parseNumbers(numbersString, delimiters);

    checkForNegatives(nums);

    return sumNumbers(nums);
}

