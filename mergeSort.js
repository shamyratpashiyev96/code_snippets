/**
 * Merge sort always has O(n log n) time complexity no matter the current state of array
 * I don't know how it actually works under the hood, but I know that this algorithm relies on function call stack 
 * i.e merge() function call with shorter and shorter array
 * gets accumulated in function call stack and execution begins from the last one since it is stack collection type, something like:
 * merge([2,1])
 * merge([1,2],[4,3]) and so on.
 */

function mergeSort(values_array){
    return split(values_array);
}

function split(values_array){
    if(values_array.length <= 1){
        return values_array;
    }

    let middleIndex = Math.floor(values_array.length / 2);
    let leftArray = values_array.slice(0, middleIndex); // startIndex inclusive, endIndex exclusve.
    let rightArray = values_array.slice(middleIndex, values_array.length);

    return merge(split(leftArray), split(rightArray));
}

function merge(leftArr, rightArr){
    let resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Comparing currentValue from leftArr with one from rightArr and pushing the least one to result arr
    while(leftIndex < leftArr.length && rightIndex < rightArr.length){

        if(leftArr[leftIndex] < rightArr[rightIndex]){
            resultArray.push(leftArr[leftIndex]);
            leftIndex++;
        } else if(rightArr[rightIndex] < leftArr[leftIndex]) {
            resultArray.push(rightArr[rightIndex]);
            rightIndex++;
        } else if(rightArr[rightIndex] === leftArr[leftIndex]){
            resultArray.push(leftArr[leftIndex]);
            resultArray.push(rightArr[rightIndex]);
            leftIndex++;
            rightIndex++;
        }
    }

    return resultArray.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}

console.log(mergeSort([5,7,22,7,22,1,23,965]));