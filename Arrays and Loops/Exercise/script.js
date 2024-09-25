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


// Q5 - A for loop to print the numbers in reverse order (from 10 to 1) 
let num2 = 10;
for(let i=num2; i>=1; i--){
    console.log(i);
}


// Q6 - Using continue print only postive numbers in the array 
let array = [2,-5,4,-39,324,982,-938];
for(let i=0; i<array.length; i++){
    if(array[i] < 0){
        continue;  
    }
    console.log(array[i]);
}


// Q6 - Using accumulator pattern concatenate all the strings in the array 
let strArray = ['My', 'name', 'is', 'Kishore S R'];

let result ='';
for(let i=0; i<strArray.length; i++){
    result += strArray[i] + ' ';
}
console.log(result);

// OR

let [a,b,c,d] = strArray;
console.log(`${a} ${b} ${c} ${d}`);

// OR

console.log(strArray.join(' ')); //We can also join the elements in the 'array' using join() method - Also we can specify the sperator in-between the strArray while joining

