let display = document.getElementById('display');
let currentInput = "0";
let shouldResetDisplay = false;

function updateDisplay() {
    display.innerText = currentInput;
}

function appendNumber(num) {
    if (currentInput === "0" || shouldResetDisplay) {
        currentInput = num;
        shouldResetDisplay = false;
    } else {
        currentInput += num;
    }
    updateDisplay();
}

function appendOperator( operador ) {
    let lastChar = currentInput.slice(-1);
    if (['+', '-', '*', '/', '%'].includes(lastChar)) {
        currentInput = currentInput.slice(0, -1);
    }
    currentInput += operador;
    shouldResetDisplay = false;
    updateDisplay();
}

function clearDisplay() {
    currentInput = "0";
    updateDisplay();
}

function deleteDigit() {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = "0";
    }
    updateDisplay();
}

function calculateResult() {
    try {
        // eval function
        let sanitizedInput = currentInput.replace(/×/g, '*').replace(/÷/g, '/');
        let result = eval(sanitizedInput);
        
        if (!isFinite(result)) {
            currentInput = "Error";
        } else {
            currentInput = String(result);
        }
    } catch (error) {
        currentInput = "Error";
    }
    shouldResetDisplay = true;
    updateDisplay();
}