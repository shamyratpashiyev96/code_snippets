let arr = [1,2,3,4,5,6,7,8,9,10];
let endIndex = arr.length - 1;
let middleIndex = Math.floor(endIndex / 2);

function binary_search(target){

    for(let i = 11; i < 1_000_000; i++){
        arr.push(i);
    }
    endIndex = arr.length - 1;
    middleIndex = Math.floor(endIndex / 2)

    while(arr[middleIndex] !== target){         //While target is not found

        
        if(target < arr[middleIndex]){     //It means the target is on the left side of the array
            arr = arr.slice(0, middleIndex + 1) //Plus one is because slice(start) is inclusive, and slice(,end) is exclusive

        } else if(arr[middleIndex] < target){          // It means that target is on the right side of the array
            arr =  arr.slice(middleIndex, endIndex + 1)     //Plus one is because slice(start,) is inclusive, and slice(,end) is exclusive
        }
        console.log(arr[middleIndex]);

        endIndex = arr.length - 1;
        middleIndex = Math.floor(endIndex / 2)      //Recalculating the middle index after the array has been sliced

    }

    if(arr[middleIndex] === target) console.log(`Found: ${arr[middleIndex]}`);  // If element with current middle index is equal to target or while loop has found the element

}

binary_search(622)