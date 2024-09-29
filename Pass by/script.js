// Pass by Value: Changes made to copy do not affect the original value 
let orgValue = 10;
let modifyValue = (x) => {
    return x = 7;
}

console.log(`Modified Value: ${modifyValue(orgValue)}`); //Prints 7
console.log(`Original Value: ${orgValue}`); //No changes = 10


// Pass by Reference: The memory address of the 'object' is passed as reference
let orgObj = {name: 'Kishore', age:20};
let newObj = orgObj;
newObj.name = 'Kishore S R';
console.log(`Orginal Object: ${orgObj}`); //Change of name is reflected in both the objects
console.log(`Modified Object: ${newObj}`);
//NOTE: This above console.log won't print the objects



