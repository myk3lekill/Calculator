// DOM
const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button'); //this return an array of buttons
const clearBtn = document.getElementById('clear-btn');

// Global Variables
let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false;

// Send Number Value
function sendNumberValue(number) {
    //Replace current display value if first value is entered
    if (awaitingNextValue) {
        calculatorDisplay.textContent = number
        awaitingNextValue = false;
    } else {
        // If current display value is 0, replace it, if not add number
        const displayValue = calculatorDisplay.textContent;
        calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
    }
}

// Clear
function resetAll() {
    firstValue = 0;
    operatorValue = '';
    awaitingNextValue = false;
    calculatorDisplay.textContent = '0'
}

// Add Decimal
function addDecimal() {
    // If operator pressed, don't add decimal
    if (awaitingNextValue) return;
    // If no decimal, add one
    if (!calculatorDisplay.textContent.includes('.')) {
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
    }
}

// Use Operator
function useOperator(operator) {
    const currentValue = Number(calculatorDisplay.textContent);
    // Assign firstValue if no value
    if (!firstValue) {
        firstValue = currentValue;
    } else {
        console.log('currentValue', currentValue);
    }
    // Ready for next value, store operator
    awaitingNextValue = true;
    operatorValue = operator;
    console.log('firstValue', firstValue);
    console.log('operator', operatorValue);

}

// Event Listener for Numbers Operator and Decimal buttons
inputBtns.forEach((inputBtn) => {
    if (inputBtn.classList.length === 0) {
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    } else if (inputBtn.classList.contains('operator')) {
        inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
    } else if (inputBtn.classList.contains('decimal')){
        inputBtn.addEventListener('click', () => addDecimal(inputBtn.value));
    }
});

// Event Listener for Clear button
clearBtn.addEventListener('click', resetAll)

