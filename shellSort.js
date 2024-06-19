/**
 * Shell sort is something like extended or optimized version of insertionSort (wrote it myself by description)
 * Shell sort in the best and average cases has O(n log n) time complexity and in the worst case it has O(n^2) just like insertionSort.
 * The way it works is that it loops through the list
 * takes one value from one end of the list and another one from other end of the list (using gap value),
 * compares them and swaps them if needed 
 * and gap keeps shrinking until it is 1 and it starts functioning like insertionSort (comparing and swapping the values with the next one because the gap is 1)
 */

function shellSort(values_list){
    if(values_list.length <= 1){
        return values_list;
    }

    // Defining the initial gap
    let gap = Math.floor(values_list.length / 2); 

    // Decreasing the gap by one until it is equal to 1
    for(gap; gap > 0; gap--){   
        let i = 0;
        let leftEndIndex = 0;
        let rightEndIndex = 0;

        // Looping through the list and swapping the items each time gap is decreased until 
        while(rightEndIndex < values_list.length){    
            leftEndIndex = i;
            rightEndIndex = i + gap;
            
            if(values_list[leftEndIndex] > values_list[rightEndIndex]){
                let temp = values_list[rightEndIndex];
                values_list[rightEndIndex] = values_list[leftEndIndex];
                values_list[leftEndIndex] = temp;
            }

            i++;
        }

    }
    return values_list;
}

console.log(shellSort([22,54,75,31,6,377,12,4,51,1]))