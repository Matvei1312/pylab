let currentInput = '';
let currentOperation = null;
let previousInput = null;

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function setOperation(operation) {
    if (currentOperation !== null) {
        calculateResult();
    }
    currentOperation = operation;
    previousInput = currentInput;
    currentInput = '';
}

function calculateResult() {
    if (currentOperation === null || previousInput === null) {
        return;
    }

    let result;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    switch (currentOperation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    currentOperation = null;
    previousInput = null;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    currentOperation = null;
    previousInput = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}
