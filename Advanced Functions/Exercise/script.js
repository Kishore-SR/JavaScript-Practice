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
//         btnClick.style.scale='4';
//     },2000);
// })
let btnClick = document.querySelector('.btn');
let fsize=18;
btnClick.addEventListener('click', ()=>{
    setTimeout(()=>{
        fsize *= 2;
        btnClick.style.fontSize='fsize';
    },2000);
})

// Q4 - Do it with eventListener (already done) 
let array = [1,2,3,4,5,6,7,8,9,10];
let arraySum = 0;
array.forEach(element => {
       arraySum += element;
});
console.log(`Array Sum: ${arraySum}`);

// Q5 - Return the squares of array elements 
let squares = array.map((num)=>{
    return num * num;
})
console.log(`Array Squares: ${squares}`);
