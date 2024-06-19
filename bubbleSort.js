/**
 * BubbleSort has O(n) complexity in the best case (if it is already sorted) and O(n^2) in the worst.
 * The way it works is that it takes a pair of elements and swaps them if next one is less than current element. 
 * BubbleSort is just like insertionSort but it works towards the end of the array, 
 * meaning it collects sorted elements not in the beginning (like insertionSort does) but in the end of the array,
 * it just like bubbles items with large values up to the end of the array.
 */

function bubbleSort(values_array){
    if(values_array.length <= 1){
        return values_array;
    }
    let isSorted = false;

    while(!isSorted){
        isSorted = true

        for(let j=0; j < values_array.length; j++){

            if(values_array[j] > values_array[j + 1]){
                let temp = values_array[j + 1]
                values_array[j + 1] = values_array[j];
                values_array[j] = temp;
                isSorted = false
            }
        }
    }

    return values_array;
}


console.log(bubbleSort([ 66, 63, 14, 3, 2, 1 ]));