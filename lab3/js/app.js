
//Task 1
console.log("Task 1");
function getFibonacciSum(number) {
    let i = 0, sum = 0;
    let resArr = [0, 1];

    while(i < number){
        resArr[i+2] = resArr[i] + resArr[i+1];
        sum += resArr[i+2];

        i++;
    }

    console.log(`Array: ${resArr}`);
   
    return sum;
}

let result = getFibonacciSum(10);
console.log(`Output: ${result}`);

//Task 2
console.log("\nTask 2");

function checkPrimeNumber(num){
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false; 
        }
    }
    return true;
}

function sumPrimeNumbers(number){
    let sum = 0;

    for(let i = 2; i < number; i++){
        if (checkPrimeNumber(i))
            sum += i;
    }

    return sum;
}
console.log(`Sum for 1000: ${sumPrimeNumbers(1000)}`);

//Task 3
console.log("\nTask 3");

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const day = document.getElementById('day').value;
    
    switch(day){
        case `1`:
            console.log("Monday");
            break;
        case `2`:
            console.log("Tuesday");
            break;
        case `3`:
            console.log("Wednesday");
            break;
        case `4`:
            console.log("Thursday");
            break;
        case `5`:
            console.log("Friday");
            break;
        case `6`:
            console.log("Saturday");
            break;
        case `7`:
            console.log("Sunday");
            break;
    }
});

//Task 4
console.log("\nTask 4");

function getOddStrings(array){
    let out = [];

    for(let i = 0; i < array.length; i++){
        if(array[i].length % 2 != 0){
            out.push(array[i]);
        }
    }

    return out;
}

let input = ["Test", "Test1", "Test12", "test123"];
console.log(`Input: ${input}`);
console.log(`Output: ${getOddStrings(input)}`);

//Task 5
console.log("\nTask 5");

let addNumberToEach = (array) =>{
    let out = [];
    for(let i = 0; i < array.length; i++){
        out.push(array[i]);
        out[i]++;
    }
    return out;
}

let arr1 = [1,2,3,4,5];
console.log(`${addNumberToEach(arr1)}`);

//Task 6
console.log("\nTask 6");

function check(a, b){
    return a+b == 10 || a-b == 10 || b - a == 10; 
}

console.log(`${check(5,5)}, ${check(9,1)}, ${check(11,1)}, ${check(17,1)}`);

