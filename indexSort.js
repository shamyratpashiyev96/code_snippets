function indexSort(values_array){
    if(values_array.length <= 1){
        return values_array;
    }
    let max_value = Math.max(...values_array);
    let empty_array = Array.from({ length: max_value }, () => 0);
    // console.log(empty_array)
    for(let i = 0; i < values_array.length; i++){
        // empty_array[values_array[i]] = values_array[i];
        empty_array.splice(values_array[i],0,values_array[i]); // position, deleteCount, insertee
        // empty_array.splice(6,0,2)
    }

    // empty_array = empty_array.filter(x => x != 0);

    return empty_array;
}

console.log(indexSort([6,2,8,1,6]));