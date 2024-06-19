// Insertion sort has O(n) time complexity in the best case(if the list is already sorted), but in the average and worst scenarios it has O(n^2)
// In brief, it just loops through the array starting from beginning 
// and shifts current element to its proper place leaving behing sorted array
// so for example if the current value being processed is somewhere in the middle of the array,
// it means that the first half of the array is sorted
// It loops through the array, takes the current element, goes back and 
// shifts previous element forward if it is greater than current or it has reached the beginning of the array 
// and then inserts current value there 
// or values[previousIndex] <= current
// It doesn't go back if the previous element is less than or equal to the current


function insertionSort(values){
    for(let i = 1; i < values.length; i++){
        let currentValue = values[i];   //Putting current value to a separate variable
        let previousIndex = i - 1;  //Getting the previous index

        while(previousIndex >= 0 && values[previousIndex] > currentValue){ // Looping back through the list if the previous value is greater than current one
            values[previousIndex + 1] = values[previousIndex]   //Moving previous value one element forward since it is greater than the current value
            previousIndex--;    // Decreasing the index by one so the loop goes on
        }
        values[previousIndex + 1] = currentValue    //Inserting the current value to the empty spot after shifting is completed 
                                                // +1 is because when the while loop breaks it decreases the previous index by one and isn't executed next time
    }
    return values;
}

console.log(insertionSort([5,7,2,3,8,9,1]));