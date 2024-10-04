// Promises: It is like a container or placeholder to store the result (success/failed) of a async operation 

// #1 Creating a Promise 
let value = 10<8;
const myPromise = new Promise((resolve, reject) => {
    if (value) {
        resolve('Success!'); // promise success
    } else {
        reject('Failure!');  // promise failed
    }
});

myPromise.then((resolve) => { // .then takes the success message
    console.log(resolve);
}).catch((reject) => { // .catch takes the reject message
    console.log(reject);
})

// #2 When the promise rejects the task 
const orderPizza = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Pizza order failed!');
    }, 2000);
});

orderPizza
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error); //Output (reject message)
    });
