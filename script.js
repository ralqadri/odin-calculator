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

let numbers = [];

const calcDisplay = document.querySelector('.calc-display');

function clickNumberButton() {
    if (calcDisplay.textContent == '0') {
        calcDisplay.textContent = this.textContent;
    } else {
        calcDisplay.textContent += this.textContent;
    }
}

function clickOperationButton() {
    // catch first number for operation (a), store it on `numbers`
    let firstNumber = calcDisplay.textContent;
    numbers.push(Number(firstNumber));
    console.log(numbers);

    calcDisplay.textContent = 0;

    console.log(numbers);
}

function clickEqualButton() {
    let secondNumber = calcDisplay.textContent;
    numbers.push(Number(secondNumber));

    console.log(numbers);
    findResults();
}

function findResults() {
    console.log(add(numbers[0], numbers[1]));

    numbers = [];
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