/**
 * It has O(n) complexity in the best case (if it is already sorted) and O(n^2) in the worst just like bubble sort.
 * It is just like bubbleSort, the only difference is that it goes in two directions (left to right and backwards)
 * unlike bubbleSort which iterates only from left to right.
 */
function cocktailShakerSort(values_array){
    if(values_array.length <= 1){
        return values_array;
    }

    let isSorted = false;

    // Works only if swap has happened in the last iteration
    while(!isSorted){
        isSorted = true;

        // Looping forward
        for(let i = 0; i < values_array.length; i++){

            if(values_array[i] > values_array[i+1]){
                let temp = values_array[i+1];
                values_array[i+1] = values_array[i];
                values_array[i] = temp;
                isSorted = false; // If swap has happened it means it is not sorted yet
            }
        }

        isSorted = true;

        // Looping backwards
        for(let i = values_array.length - 1; i >= 0; i--){

            if(values_array[i-1] > values_array[i]){

                let temp = values_array[i];
                values_array[i] = values_array[i-1];
                values_array[i-1] = temp;
                isSorted = false;   // If swap has happened it means it is not sorted yet

            }
        }

    }

    return values_array;

}


console.log(cocktailShakerSort([102, 66, 63, 14, 3, 2]));