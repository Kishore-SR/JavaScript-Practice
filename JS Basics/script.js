// Falsy Values: 0, Nan, null, undefined, ''(empty string), false
let age = 0.001;
console.log('Age='+age);
if(age){
    console.log('Valid age');
}
else{
    console.log('Not valid age');
}

// Gaurd Operator (||) : If there is any 'Falsy Value' at the left side then fallback occurs
let age2= false;
let finalAge2 = age2 || NaN;
console.log('Age: '+age2);
console.log('Final Age: '+finalAge2);


// Default Operator (??) : Fallbacks only if the left values are 'null' and 'undefined'
let age3= null;
let finalAge = age3 ?? 18;
console.log('Age: '+age3);
console.log('Final Age: '+finalAge);


// ||= Operator : If left side is falsy value -> Right side value is considered
let a = ''; //Falsy values are: 0, Null, NaN, undefined, '', false, 0n
a ||= 'Default Name';
console.log(a);

// &&= Operator: If left side is truthy value -> Right side value is considered 
let b='Kishore S R'; //Truthy Value
b &&= 'Default Name';
console.log(b);

// Using 'Underscores' (_) to improve readability of numbers 
let num = 1_000_000;
console.log(num + 5);
let numFloat = 1_000_0.5;
console.log(numFloat+8.5);

// array.at() method : To access array (or) string elements both from 'start' and 'end' indexing (negative indexing)
let array = [1,2,3,4,5,6];
console.log(array.at(-1)); //OP: 6 (last element from the array)

console.log(array.at(-3)); //OP: 4 (last 3rd element from the array)