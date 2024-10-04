// Advanced Functions - Practice Exercises 

// Q1 - A var 'multiply' assigned to a function to multiply two numbers 
let multiply = function(a, b){
    return a * b;
}
console.log(multiply(3,5))

// Q2 - a function runTwice that takes function as a parameter and run that method twice 
function printStatement(){
    console.log('Function running');
} 
let runTwice = function(run){
    run();
    run();
}
runTwice(printStatement);

// Q3 - A button which should grow 'double in size' on clicking after 2 seconds 
// let btnClick = document.querySelector('.btn');
// btnClick.addEventListener('click', ()=>{
//     setTimeout(()=>{
//         btnClick.style.scale='2';
//     },2000);
// })

// Q4 - Do the above Q with eventListener (already done) 

// Q5 - Find sum of array elements using forEach loop 
let array = [1,2,3,4,5,6,7,8,9,10];
let arraySum = 0;
array.forEach(element => {
       arraySum += element;
});
console.log(`Array Sum: ${arraySum}`);

// Q6 - Return the squares of array elements 
let squares = array.map((num)=>{
    return num * num;
})
console.log(`Array Squares: ${squares}`);


// Higher Order Functions and Call Back Functions 
// Q - Perfrom add() and sub() operation for two numbers using a callback function 
function mathOperation(a, b, operation){
    console.log('Function run');
    
    return operation(a,b);
}
function sum(a,b){
    console.log('sum running');
    return `Sum= ${a+b}`;
}
function sub(a,b){
    console.log('sub running');
    return `Sub= ${a-b}`;
}
console.log(mathOperation(8,3,sub));