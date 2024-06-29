// Jump search works by jumping to the right portion of the array and looping through it until the data is found.
// Jump search is less efficient than binary search but it might be useful in some cases, 
// for example if the data set is too large and it would have too many function calls.
// Its time complexity is O(√n) (square root n)
// The square root of a number is another number that, when multiplied by itself, equals the original number, e.g Math.sqrt(9) == 3

function jumpSearch(values_array = [], targetValue){
    let targetFound = false;
    let jumpGap = Math.floor(values_array.length /  3);
    let index = 0;

    // If the array is to short for jumping
    if(values_array.length <= 2){
        values_array.forEach(x => {
            if(x == targetValue) targetFound = x
        });

    } else {
        // Sorting the array in case it is not sorted
        values_array = values_array.sort((a, b) => a - b);

        while(targetFound === false && targetFound != undefined){
            targetFound = isWithinRange(targetValue, values_array, index, index + jumpGap);
            index += jumpGap;
        }
    }

    return targetFound
}

function isWithinRange(targetValue, values_array = [], startIndex = 0, endIndex = 0){

    // Looping if target is within the current range or it is the last (rightmost) part of the array (which would mean that the target is in the last positions)
    // or it is not there at all
    if((values_array[startIndex] <= targetValue && values_array[endIndex] >= targetValue) || endIndex >= values_array.length){
        
        for(let i = startIndex; startIndex < endIndex; i++){
            // Returning the target if it is found or returning undefined if endIndex has been reached and the target hasn't been found
            if(values_array[i] == targetValue) 
                return values_array[i];
            else if (i == endIndex){
                return undefined;
            }
        }

    }
    return false;
}

console.log(jumpSearch([54, 23, 87, 12, 65, 43, 98, 76, 34, 21, 9, 56, 31, 88, 42, 77, 19, 67, 45, 10], 45))