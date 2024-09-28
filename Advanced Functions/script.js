// Anonymus Functions as Values
let sum = function (num1, num2) {
  return num1 + num2;
};
console.log(sum(6, 3));
console.log(sum(sum(5, 4), 2)); //Same two number sum function can be used to calculate sum of 3 or more nos.

// Arrow Functions
let result = (a, b) => {
  return a + b;
};
console.log(result(1, 3));
//If only one parameter also one line of function
let square = (num) => num * num;
console.log(`Square: ${square(5)}`);

//Making the text change on button using 'Arrow Function'
let btnEle = document.querySelector(".btn");
btnEle.addEventListener("click", () => {
  console.log("Button Clicked");
  let text = btnEle.innerText;
  if (text === "Subscribed") {
    btnEle.innerText = "Unsubscribed";
    btnEle.style.backgroundColor = 'gray';
  } else {
    btnEle.innerText = "Subscribed";
    btnEle.style.backgroundColor = 'rgb(243, 88, 88)';
  }
});


// EVENT LISTENERS 
let box=document.querySelector('.container');
let btnNew = document.querySelector('.btn-event');
let text = document.querySelector('.text-msg');

// For Mouse:
box.addEventListener('mouseover', ()=> {console.log('Mouse Pointer is inside the div container.')});
box.addEventListener('mouseout', ()=> {console.log('Mouse moved out of container')});

//For Keyboard:
text.addEventListener('keydown', ()=>{console.log('Key Pressed')});
let keyCount=0;
text.addEventListener('input', () => {console.log(`Key Pressed: ${keyCount++} time: The key is ${event.key}`)});
text.addEventListener('keydown', (event) => {console.log(`Key Pressed is: ${event.key}`)});

// For Window: 
window.addEventListener('resize', () => {
  console.log('Window resized!');
});
window.addEventListener('scroll', () => {
  console.log('Page scrolled!');
});
window.addEventListener('load', () => {
  console.log('Page fully loaded!');
});

// Adding loading animation for button 
const button = document.querySelector('.my-btn');

button.addEventListener('click', function() {
  button.classList.add('loading');  
  
  setTimeout(function() {
    button.classList.remove('loading');  
  }, 3000);  
});


// FOR EACH loop 
let foodArray = ['briyani', 'dosa', 'idli', 'pongal', 'rice & sambar'];
foodArray.forEach(foodItem => {
  console.log(`Your food: ${foodItem}`);
});