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
