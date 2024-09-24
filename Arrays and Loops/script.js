//Declaring a Array in JS

//Array can store any values in it and even nested arrays
let myArray = [1, 'Kishore S R', 'Bangalore', 9.14, {subjects : 5}, true, null, [2,4,6,8]];
console.log(myArray);
console.log('City: '+myArray[2]);
console.log(myArray[4]);
console.log(myArray[7]);
console.log(myArray[7][1]); //Printing the 2nd element inside the array of 'myArray'

console.log(typeof(myArray)); //Type of array is also 'object'

console.log(Array.isArray(myArray)); //Returns true

let obj = {name:'KSR', age:20};
console.log(Array.isArray(obj)); //Returns false

let size = myArray.length;
console.log('POPPING ARRAY ELEMENTS:')
for(let i=0; i<size; i++) 
{
    console.log(myArray.pop());
}

let arr = [2,4,6,8];
arr.push(10);
console.log('Old array: '+arr);
console.log('Removed Elements from array: ' + arr.splice(1,3,1,11));

console.log('New array: '+arr);

// Destructuring the array:
let userInfo = [1,'Kishore S R', 'Bangalore'];
let [num, name, city] = userInfo;
console.log(num);
console.log(name);
console.log(city);

//Accumalator Pattern:
let numbers = [1, 2, 3, 4, 5];
let sum = 0; // Initialize the accumulator

for (let number of numbers) {
    sum += number; // Update the accumulator
}

console.log(sum); 