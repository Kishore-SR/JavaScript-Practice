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