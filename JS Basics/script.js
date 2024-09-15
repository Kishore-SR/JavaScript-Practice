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