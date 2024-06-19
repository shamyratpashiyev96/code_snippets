/*
    If we look at the execution tree of this function:
        1)At the first level, this function gets called 3 times passing n=2 (0,1,2)
        2)At the second level, each of those 3 functionCalls calls this function two times passing n=1 (0,1)
        3)At the third level, each of those 6 functionCalls at the second level calls this function only once passing 0 which triggers console.log("*******************");
    So console.log gets executed 6 times, which is factorial of 3
*/

function factorial(n){      // O(n!)
    if(n === 0){
        console.log("*******************");
        return;
    }

    for(let i = 0; i < n; i++){
        factorial(n - 1);
    }
}

factorial(3);




function factorialOfLoop(number){       //For loop version O(n)
    if(number <= 1){
        console.log(`Result is ${number}`);
        return;
    }

    let res = number;
    for(let i = number - 1; i > 1; i--){
        res = res * i;
    }
    console.log(`Result is ${res}`);
}

function factorialOfRecursion(number, currentValue = number){       //Recursive version O(n)
    if(number <= 1){
        console.log(`Result is ${currentValue}`);
        return;
    }

    factorialOfRecursion(number - 1, currentValue * (number-1))
}

// factorialOfLoop(7)
// factorialOfRecursion(4)