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
