let user = {
    name:"Kishore S R",
    "dob-user":11,
    age: 20,
};

console.log(user.age)
let value="dob-user";
console.log(user[value]);

console.log(user);
let user2=user;
console.log(user2);

user2.age=24;
console.log(user);
console.log(user2);


// Refering whole Window as a object
function show(){
    console.log(this);
}

show();


// Checking 'Object Reference' Equality
let a={value:25};
let b={value:25};
console.log(a == b); // 'FALSE' because even though both objects have same values inside the ref location is diff
console.log(a === b); // 'FALSE' same reason as above

console.log(a.value == b.value);
console.log(a["value"] == b["value"]);


// Object Shortcuts 
let userNew = {
    name:"Kishore S R",
    sem: 5,
    age: 20,
};

let name2 = userNew.name;

// (or) 

console.log(name2);


// USES of OBJECT.methods:

let myObj = {name:'Kishore S R',
    usn: 48,
    age: 20,
    sem: 6,
    college: 'EPCET',
};
// Printing only 'keys' of the objects 
let keyValues = Object.keys(myObj);
console.log(keyValues);

//Printing only values of the objects 
let objValues = Object.values(myObj);
console.log(objValues);

//Object.entries() returns arrays of key-value pairs
let arrayType = Object.entries(myObj);
console.log(arrayType);

// Object.assign() copies the key value pairs from source to target
let objA = {value1: 5, value2: 7, value3:9};
let objB = {value4:12, value1:4, value5: 14, value3:8};
console.log(Object.assign(objA,objB));

// Object.freeze() prevents the object from adding 'new properties' to the object or 'modifying properties' in the object 
Object.freeze(myObj); 
myObj.usn = 123;
console.table(myObj);


//  *** INTERVIEW QUESTIONS ***
// Q1 - Compare the key value pairs of two objects and return true or false 
let obj1 = {name: 'KSR', age:20};
let obj2 = {name: 'KSR', age:20};

function checkEqual(obj1, obj2){
    for(let key in obj1){
        if(obj1[key] !== obj2[key]){
            return false;
        }
    }
    return true;
}
console.log(checkEqual(obj1,obj2));


// CLOSURES in JavaScript
function outerFunction() {
    let outerVariable = 'I am from outer function';

    function innerFunction() {
        console.log(outerVariable); // 'outerVariable' is accessible here
    }

    return innerFunction; // Return the inner function
}
const closureExample = outerFunction();
closureExample(); // Output: 'I am from outer function'


// Destructuring in JavaScript:
let person = {name:'Ashok', age:27};
// let {name, age} = person;
// console.log(name, age);

// No need to main the order of keys while destructuring 'Objects'
// let {age, name} = person;
// console.log(age, name);

//Renaming the properties in object
let {age: myAge, name: MyName} =person;
console.log(myAge, MyName);


//SPREAD (...) operator
// #1 To copy the elements from one array to another 
let fruits = ['Apple', 'Mango', 'Banana', 'Kiwi'];
let newFruits = [...fruits];
console.log(newFruits);

// #2 To merge two arrays or even objects 
let A = [1,2,3,4,5];
let B = [6,7,8,9,10];
let C = [...A, ...B];
console.log(C);

// #3 To pass elements of array all at once as arguments to a function 
function sumArray(a,b,c,d,e) //because array has 5 elements
{
    return a + b + c + d + e;
}
console.log(sumArray(...A)); //Here each number from array 'A' is passed to it's respective argument position

// #4 To separate the chars in the String 
let place = 'Bangalore';
console.log([...place]);
// or 
let placeLetters = [...place]; // Storing the letters as a new Array
console.log(placeLetters[4]);
console.log(typeof placeLetters);

// Using .reduce funtion to easily find the sum of array elements 
let sum = (...numbers) =>{
    return numbers.reduce((result, currValue) => (result += currValue),0);
};
console.log(`SUM OF ARRAY ELEMENTS: ${sum(1,2,3,4,5)}`);


// STRING PADDING: 
let str = 'Kishore';
console.log(str.padStart(10, '*'));

console.log(str.padEnd(10,'*'));

// Using 'Spread' Operator in Objects: 
let object1 = {a: 10, b: 20, c:30};
let object2 = {c: 40, d: 50, e:60};
let newObject = {a:90,...object1, ...object2}; //Any repeated key-value pair which is common in both the objects - get's overwritten by the last repeated value
console.log(newObject);