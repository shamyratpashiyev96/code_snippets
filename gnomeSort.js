/**
 * It is something like a combination of bubbleSort and inserionSort.
 * It has O(n) complexity in the best case (if it is already sorted) and O(n^2) in the worst case (if it is sorted in descending order).
 * The way it works is that it compares the current element with adjacent one and if it is less in value
 * it swaps current one with adjacent one and goes one position backwards and compares it with adjacent one again if it is okay
 * it continues moving forward comparing each element with previous one
 */
function gnomeSort(values_array){
    if(values_array.length <= 1){
        return values_array;
    }

    let pos = 0;
    // Executes until it makes to the end of the array
    while(pos < values_array.length){
        // If it finds inconsistency in the array it takes it and goes backwards swapping each element with previous one
        if( values_array[pos] < values_array[pos - 1]){
            let temp = values_array[pos - 1];
            values_array[pos - 1] = values_array[pos];
            values_array[pos] = temp;
            pos--;
        // If current element is in proper place it goes forward
        } else {
            pos++;
        }
    }

    return values_array;
}

console.log(gnomeSort([9,8,7,6,5,4,3,2,1]))