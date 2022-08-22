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

const calcDisplay = document.querySelector('.calc-display');

function clickNumberButton() {
    if (calcDisplay.textContent === '0') {
        calcDisplay.textContent = this.textContent;
    } else {
        calcDisplay.textContent += this.textContent;
    }
}

const numberButtons = document.querySelectorAll('.btn-number');
numberButtons.forEach((button) => {
    button.addEventListener("click", clickNumberButton);
})