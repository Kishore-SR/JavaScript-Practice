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


// IMP: Different ways to print the objects in console window 
// Method 1: using JSON.stringify i.e by converting object into string
console.log(`Orignal Obj: ${JSON.stringify(orgObj)}`);
console.log(`Orignal Obj: ${JSON.stringify(newObj)}`);

// Method 2: By using the console.table() method 
console.table(orgObj);
console.table(newObj);

// Method 3: Using for...in loop 
for (let key in orgObj)
    {
    console.log(`${key}: ${orgObj[key]}`);
    }

//Method 4: Directly printing the key-value pairs by orgObj.name
console.log(`Name: ${orgObj.name}, Age: ${orgObj.age}`);

