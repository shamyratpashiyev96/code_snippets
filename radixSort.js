/**
 * Radix sort algorithm has O(n * d) where digit stands for digit number the biggest integer has.
 * The way it works is that it loops through each digit of each element in the array and pushes them to appropriate subarray of multidimensional array.
 * On each digit iteration the multidimensional array gets merged into one and so on (Check the video tutorial for more information).
 * This algorithm is used in mechanical sorting so it doesn't fit digital computing that much.
 */

function radixSort(values_list){
    if(values_list.length <= 1){
        return values_list;
    }

    let multidimensional_array = Array.from({ length: 10 }, () => []);

    // Mapping is there to ensure it gets the element with most digits if all values are negative (in that case -1 > -99)
    let maxIntLength = Math.max( ...(values_list.map(x => Math.abs(x))) ).toString().length

    // Looping through digits of integer with max value, it loops from right to left where 0 means the last one (d stands for digit index)
    for(let d = 0; d < maxIntLength; d++){    

        // Looping through each element in the array (e stands for element) 
        for(let e = 0; e < values_list.length; e++){ 
           
            let nth_digit = getDigit(values_list[e], d); //Gets digit from right to left(0 means the last one)
            
            multidimensional_array[nth_digit].push(values_list[e]); //Pushing the element to multidimensional array based on its value
        }
        
        values_list = [].concat(...multidimensional_array); //Combining the arrays into one for further processing
        multidimensional_array = Array.from({ length: 10 }, () => []); //Resetting the multidimensional array

    }

    return values_list.map(x => Number.parseInt(x));
}

// Gets digit at pos of num value from right to left mathematically, returns zero if it doesn't exist
// I solved this by turning integer into string, got this func from AI generated code (took the best parts and combined with my solution) 
function getDigit(num, pos) {
    return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10;
}

console.log(radixSort([67,2,355,12,4,21]))
