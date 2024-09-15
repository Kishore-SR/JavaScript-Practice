let product = {
    name:"T-shirt",
    brand:"Rare Rabbit",
    size: "M",
    price: 1500,
    "delivery-time":"24 Hours",
}

// Converting JS object ---> JSON String
let strType = JSON.stringify(product);
console.log(strType);
console.log(typeof strType);

// Converting JSON String ---> JS object
let objType = JSON.parse(strType);
console.log(objType);
console.log(typeof objType);
