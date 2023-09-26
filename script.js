// DOM
const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button'); //this return an array of buttons
const clearBtn = document.getElementById('clear.btn');

// Send Numbers
function sendNumberValue(number) {
    // If current display value is 0, replace it, if not add number
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
}


// Event Listener for Numbers Operator and Decimal buttons
inputBtns.forEach((inputBtn) => {
    if (inputBtn.classList.length === 0) {
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    } else if (inputBtn.classList.contains('operator')) {
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    } else if (inputBtn.classList.contains('decimal')){
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    }
});
