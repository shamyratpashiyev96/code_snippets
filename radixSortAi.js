// Helper function to get the digit at a given place value
function getDigit(num, pos) {
    return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10;
}
    
// Helper function to count the number of digits in a number
function digitCount(num) {
    if (num === 0) return 1;

    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Function to find the number with the most digits in an array
function mostDigits(nums) {
    let maxDigits = 0;

    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }

    return maxDigits;
}

// The main radix sort function
function radixSort(nums) {
    // Determine the maximum number of digits any number in the array has
    let maxDigitCount = mostDigits(nums);
    
    // Loop over each place value, starting with the least significant digit
    for (let k = 0; k < maxDigitCount; k++) {
        // Create buckets for each digit (0 to 9)
        let buckets = Array.from({ length: 10 }, () => []);
    
        // Place each number in the corresponding bucket based on its k-th digit
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            buckets[digit].push(nums[i]);
        }
    
        // Reconstruct the array by concatenating all subarrays in buckets
        nums = [].concat(...buckets);
    }
    
    // Return the sorted array
    return nums;
    }

// Example usage:
const unsortedArray = [23, 345, 5467, 12, 2345, 9852];
const sortedArray = radixSort(unsortedArray);
// console.log(sortedArray); // Output will be the sorted array
console.log(getDigit(4055,3))