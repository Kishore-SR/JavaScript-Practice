let displayText = "";
let result=0;

function calculateResult() {
    try {
        const result = eval(displayText);
        document.querySelector('.display').innerHTML = result;
    } catch (error) {
        console.error("Invalid Expression:", error);
        document.querySelector('.display').innerHTML = "Error";
    }
}