// DOM
const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button'); //this return an array of buttons
const clearBtn = document.getElementById('clear-btn');

// Send Number Value
function sendNumberValue(number) {
    // If current display value is 0, replace it, if not add number
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
}

// Clear
function resetAll() {
    calculatorDisplay.textContent = '0'
}

// Add Decimal
function addDecimal() {
    // If no decimal, add one
    if (!calculatorDisplay.textContent.includes('.')) {
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
    }
}

// Event Listener for Numbers Operator and Decimal buttons
inputBtns.forEach((inputBtn) => {
    if (inputBtn.classList.length === 0) {
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    } else if (inputBtn.classList.contains('operator')) {
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    } else if (inputBtn.classList.contains('decimal')){
        inputBtn.addEventListener('click', () => addDecimal(inputBtn.value));
    }
});

// Event Listener for Clear button
clearBtn.addEventListener('click', resetAll)

