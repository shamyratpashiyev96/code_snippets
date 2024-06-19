/* It uses divide & conquer principle just like mergeSort algorithm
* It just simply takes the middle element of the list as a pivot value, moves it to 0-th position and iterates through array starting from 1-st position 
* breaks elements into two lists: less_than_pivot and greater_than_pivot
* and then it breaks less_than_pivot and greater_than_pivot tables again and again until it has only one element left
* and then it merges them together like: quicksort(less_than_pivot) + [pivot] + quicksort(greater_than_pivot)
* It's time complexity in the best case is O(n log n) and in the worst case is O(n^2)
* Achieving the best case depends on picking the right pivot. In this case we just pick the first value (usually pivot is picked randomly)
* Taking into account our function below, if we passed a list of reversely ordered list, it would be the worst case for our algorithm
* because with every iteration we wouldn't be able to split the list in half (would decrease its length only by one)
* so picking pivot value randomly would help our function some way
*/

function quickSort(values_array){
    if(values_array.length <= 1){
        return values_array;
    }

    let lessThanPivot = [];
    let greaterThanPivot = [];
    let pivotIndex = Math.floor(values_array.length / 2);

    // Moving pivot to first position
    let temp = values_array[pivotIndex];
    values_array[pivotIndex] = values_array[0];
    values_array[0] = temp;
    temp = null;
    let pivot = values_array[0];

    for(let i = 1; i < values_array.length; i++){   // Starting from the second element since I moved pivot to first position.
        if(values_array[i] <= pivot){
            lessThanPivot.push(values_array[i]);
        } else {
            greaterThanPivot.push(values_array[i]);
        }
    }

    return [].concat(quickSort(lessThanPivot)).concat([pivot]).concat(quickSort(greaterThanPivot));
}


console.log(quickSort([6,2,74,2,4,83,2]))