// The time complexity of Counting Sort is  O(n + k), where n is the number of elements in the input array and k is the range of the elements.
// Explanation is very complex so check the tutorial video for more details
function countingSort(values_array){
    if(values_array.length <= 1){

    }

    // Number of occurences of current number, for example if occurrences[2] returns 1, it means there is only one occurence of 2 in the array 
    let occurences = [];
    let from_to_positions = [];
    let result = [];

    for(let i = 0; i <= Math.max(...values_array); i++){
        // Getting and adding the number of occurences of the current element, e.g if current element is 1 and if there are two 1-s in the array it'll return two
        occurences.push(values_array.filter(x => x == i).length);

        // Calculating from-to positions of the current element
        from_to_positions.push((from_to_positions[i-1] ?? 0) + occurences[i])
        
        // Start position
        let from_position = from_to_positions[i-1] ?? 0;
        // Adding the current element from-to position, e.g if from_to_positions[0] is 1 it means 0 goes from 0-th index (inclusive) to 1-st index (exclusive) 
        for(let j = from_position; j < from_to_positions[i]; j++){
            result.push(i)
        }
    }

    return result;
}

console.log(countingSort([1,0,3,1,3,1,22,31,0]))