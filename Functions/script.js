let result;

function sum(x=1,y=2)
{
    let sum=x+y;
    return sum;
}

result = sum(3);
console.log(result);


// PRACTISE EXERCISE 

// Q1. Check the number is odd or even 
function oddEven(num){
    if(num % 2 === 0){
        console.log(num + " is Even");
    }
    else {
        console.log(num + " is Odd");
    }
}
oddEven(4);


// Q2. Return Largest of two numbers 
function Largest(a, b){
    if(a > b){
        return a;
    }
    else{
        return b;
    }
// (or) In Simple: 
    return a>b? a : b;
}
console.log(`Largest Number: ${Largest(8,4)}`);


// Q3. Convert Celsius to Fahrenheit 
function ctoF(C){
    let F = (9/5) * C +32;
    return F;
}
console.log("C to F: "+ctoF(32));
