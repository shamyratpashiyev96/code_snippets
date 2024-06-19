function heapSort(values_array = []){
    if(values_array.length <= 1){
        return values_array;
    }

    let temp;
    let resultArray = [];
    // Heapifying an unsorted array
    values_array = heapify(values_array);

    while(values_array.length > 0){

        // Swapping rootNode with the last child node
        temp = values_array[0];
        values_array[0] = values_array[values_array.length - 1];
        values_array[values_array.length - 1] = temp;

        // Adding the rootNode to the resultArray
        resultArray.push(values_array.pop());

        // Trickling down swapped rootNode (which was the last child of an array) to put it in its rightful place
        values_array = trickleDownNodeAt(values_array, 0);
    }

    return resultArray;
}

// Turns simple unsorted array into max heap
function heapify(values_array = []){
    if(values_array.length <= 1){
        return values_array;
    }

    let heapified = false;
    let temp;

    while(!heapified){
        heapified = true

        // Bubbling greater values up in heap (swapping parent with child if parent has less value)
        for(let i = values_array.length - 1; i > 0; i--){
            let parentNodeIndex = Math.floor((i - 1) / 2);

            if(values_array[parentNodeIndex] < values_array[i]){
                temp = values_array[parentNodeIndex];
                values_array[parentNodeIndex] = values_array[i];
                values_array[i] = temp;
                heapified = false
            }
        }
    }

    return values_array;
}

// Bubbles down a node at specific index to where it should be
function trickleDownNodeAt(values_array = [], targetNodeIndex = 0){
    if(values_array.length <= 1){
        return values_array;
    }

    let tempValue;
    let leftChildIndex = (targetNodeIndex * 2) + 1;
    let rightChildIndex = (targetNodeIndex * 2) + 2;

    // If leftChildIndex is out of bounds (it means there is only one node in the array)
    

    // Keeps pushing target element down until it has children that are less in value or it is at the bottom of heap
    while(values_array[targetNodeIndex] < values_array[leftChildIndex] || values_array[targetNodeIndex] < values_array[rightChildIndex]){

        // If leftChild is bigger than or equal to the rightChild or if rightChildIndex is already out of bounds (it happens when there are only two nodes left)
        if(values_array[rightChildIndex] <= values_array[leftChildIndex] || rightChildIndex > values_array.length - 1){
            tempValue = values_array[leftChildIndex];
            values_array[leftChildIndex] = values_array[targetNodeIndex];
            values_array[targetNodeIndex] = tempValue;
            targetNodeIndex = leftChildIndex;
        } else if(values_array[leftChildIndex] < values_array[rightChildIndex]) {
            tempValue = values_array[rightChildIndex];
            values_array[rightChildIndex] = values_array[targetNodeIndex];
            values_array[targetNodeIndex] = tempValue;
            targetNodeIndex = rightChildIndex;
        } 
        
        leftChildIndex = (targetNodeIndex * 2) + 1;
        rightChildIndex = (targetNodeIndex * 2) + 2;
    }

    return values_array;
}

console.log(heapSort([11,19,10,15,9,22,21,15,8876,234,8665,33,7,5,6,17,12]))