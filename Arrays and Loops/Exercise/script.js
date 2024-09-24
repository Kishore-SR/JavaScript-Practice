// Q1 - Create a array of numbers [5,6] and add 4 at begining and 7 at end
let arrayQ1 = [5,6];
arrayQ1.unshift(4);
arrayQ1.push(7);
console.log(`Updated Array: ${arrayQ1}`);


// Q2 - Create a method to return a particular element from array
let arrayQ2 = [2,4,6,8,10];
function getEle(array, i){
    console.log(array[i-1]);
}
getEle(arrayQ2,3);


// Q3 - Create a copy of array using 'Slice' 
let originalArray = [1, 2, 3, 4, 5];
let copiedArray = originalArray.slice();
console.log(copiedArray); 


// Q4 - A while loop to print first 5 prime numbers 
let primeCount = 0;  
let num = 2;  
console.log('Prime Numbers:');

while (primeCount < 5) {  
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) { 
        if (num % i === 0) {  
            isPrime = false;
            break;
        }
    }
    if (isPrime) { 
        console.log(num); 
        primeCount++;  
    }
    num++; 
}
