function fibonacci(n){
    if(n <= 1){
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

let index = 15;
let fibseries = [];

// for(let i = 0; i < index; i++){      // It collects all fibonacci numbers till index-nth into fibseries array
//     fibseries[i] = fibonacci(i);
// }

console.log(fibonacci(index))       // It gets index-nth fibonacci number
