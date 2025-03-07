function findMissingNumber(args) {
    // Check if exactly 10 arguments are provided
    if (args.length !== 10) {
        console.error("Please provide exactly 10 numbers as arguments.");
        return;
    }

    // Convert arguments to numbers
    const numbers = args.map(arg => Number(arg));

    // Validate that all inputs are numbers
    if (numbers.some(isNaN)) {
        console.error("All inputs must be valid numbers.");
        return;
    }

    // Assuming the range is 1 to 10
    const expectedSum = (10 * (10 + 1)) / 2; // Sum of numbers from 1 to 10
    const actualSum = numbers.reduce((sum, num) => sum + num, 0);

    // The missing number is the difference between expected and actual sum
    const missingNumber = expectedSum - actualSum;

    if (missingNumber > 0 && missingNumber <= 10) {
        console.log(`The missing number is: ${missingNumber}`);
    } else {
        console.log("No missing number detected, or the inputs are invalid.");
    }
}

// Read command-line arguments (skip the first two: node and script name)
const args = process.argv.slice(2);

// Call the function with the arguments
findMissingNumber(args);