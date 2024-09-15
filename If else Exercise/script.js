let age = prompt("Enter your age: ");
let gender = prompt("Enter 'M' for 'Male' and 'F' for 'Female' ");

let ticketPrice = 100;
let orginalPrice = ticketPrice;

if (age < 5) {
  ticketPrice = 0;
} 
else if (age <= 8 || gender === "F") {
  ticketPrice = ticketPrice - 0.5 * ticketPrice;
}
else if (age > 65) {
  ticketPrice = ticketPrice - 0.3 * ticketPrice;
} else {
  ticketPrice = ticketPrice;
}

document.querySelector(
  ".msg"
).innerHTML = `Ticket Price(Before Discount): Rs. ${orginalPrice} <br> Ticket Price(After Discount): <b>Rs. ${ticketPrice}</b>`;
