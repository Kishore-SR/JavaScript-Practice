// ALL PRACTICE QUESTIONS

//An object to represent the product of Myntra website 
let product = {
    name:"T-shirt",
    brand:"Rare Rabbit",
    size: "M",
    price: 1500,
    "delivery-time":"24 Hours",
}

let productUpdate = product;

//Changing the price of T-shirt
productUpdate.price=1000;

console.log(`Original Product details: ${JSON.stringify(product.name)}`); // JSON.stringify is used to convert obj into string text format for users to read
console.log(`Updated Product details: ${JSON.stringify(productUpdate.name)}`);

console.log(product["delivery-time"]);



// De-structuring 
let update = {
    message:"good job",
    status: "completed",
};

// let status = update.status; NOT recommended
let {status} = update;
console.log(status);