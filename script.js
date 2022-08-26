function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator === 'add') {
        return add(a, b);
    }

    if (operator === 'subtract') {
        return subtract(a, b);
    }

    if (operator === 'multiply') {
        return multiply(a, b);
    }

    if (operator === 'divide') {
        return divide(a, b);
    }

}

function symbolizeOperation(operation) {
    if (operation === 'add') {
        return '+';
    } else if (operation === 'subtract') {
        return '-';
    } else if (operation === 'multiply') {
        return '×';
    } else if (operation === 'divide') {
        return '÷';
    }
}


const calcCurrentDisplay = document.querySelector('.calc-display-current');
const calcHistoryDisplay = document.querySelector('.calc-display-history');

let firstNumber, secondNumber;
let operation, operationDisplay;
let firstNumberToggle = false;

function clickNumberButton() {
    if (calcCurrentDisplay.textContent == 0 && firstNumber == undefined) {
        calcCurrentDisplay.textContent = this.textContent;
    } else if (firstNumberToggle) {
        calcCurrentDisplay.textContent = this.textContent;
        firstNumberToggle = false;
    } else {
        calcCurrentDisplay.textContent += this.textContent;
    }
}

function clickOperationButton() {
    firstNumber = Number(calcCurrentDisplay.textContent);
    firstNumberToggle = true;
    operation = this.id;
    operationDisplay = symbolizeOperation(operation);
    calcHistoryDisplay.textContent = `${firstNumber} ${operationDisplay}`
}

function clickEqualButton() {
    secondNumber = Number(calcCurrentDisplay.textContent);
    if (firstNumber == undefined) {
        calcCurrentDisplay.textContent = secondNumber;
    } else {
        calcHistoryDisplay.textContent += ` ${secondNumber}`;
        if (secondNumber == 0 && operation == 'divide') {
            calcCurrentDisplay.textContent = "nope, silly!";
            return;
        }
        calcCurrentDisplay.textContent = operate(operation, firstNumber, secondNumber);
    }
}

function clearAll() {
    // https://stackoverflow.com/questions/5795936/how-to-set-a-javascript-var-as-undefined/24748543#24748543
    // void 0 is just to make them go back to `undefined`
    firstNumber = void 0;
    secondNumber = void 0;
    operation = void 0;
    operationDisplay = void 0;
    firstNumberToggle = false;
    calcHistoryDisplay.textContent = '';
    calcCurrentDisplay.textContent = '0';
}

function backspaceNumber() {
    if (calcCurrentDisplay.textContent <= 9) {
        calcCurrentDisplay.textContent = '0';
    } else if (calcCurrentDisplay.textContent[0] == 0) {
        calcCurrentDisplay.textContent = calcCurrentDisplay.textContent.slice(1);
    } else if (calcCurrentDisplay.textContent != 0) {
        calcCurrentDisplay.textContent = calcCurrentDisplay.textContent.slice(0, -1);
    }
}

const numberButtons = document.querySelectorAll('.btn-number');
numberButtons.forEach((button) => {
    button.addEventListener("click", clickNumberButton);
})

const operationButtons = document.querySelectorAll('.btn-operation');
operationButtons.forEach((button) => {
    button.addEventListener("click", clickOperationButton);
})

const equalButton = document.querySelector('.btn-equal');
equalButton.addEventListener("click", clickEqualButton);

const clearButton = document.querySelector('.btn-clear');
clearButton.addEventListener("click", clearAll);

const backspaceButton = document.querySelector('.btn-backspace');
backspaceButton.addEventListener("click", backspaceNumber);