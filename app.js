const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const seperatorButton = document.querySelector('[data-seperator]');
const clearButton = document.querySelector('[data-clear]');
const resultButton = document.querySelector('[data-result]');
const removeButton = document.querySelector('[data-remove]');
const outputText = document.querySelector('.output');

class Calc{
    constructor(output) {
        this.calculation = '';
        this.output = output;
    }

    appendNumber(number) {
        this.calculation += number;
        this.display();
    }

    appendOperator(operator) {
        this.calculation += /[0-9]/.test(this.calculation.slice(-1)) ? operator : '';
        this.display();
    }

    seperate() {
        this.calculation += this.calculation.includes(".") ? '' : '.';
        this.display();
    }

    calculate() {
        this.calculation = eval(this.calculation).toString();
        this.display();
    }

    clear() {
        this.calculation = '';
        this.display();
    }

    remove() {
        this.calculation = this.calculation.slice(0,-1);
        this.display();
    }

    display() {
        this.output.textContent = this.calculation;
    }
}

let calculator = new Calc(outputText);

numberButtons.forEach( e => {
    e.addEventListener('click', () => {
        calculator.appendNumber(e.textContent);
    });
});

operatorButtons.forEach( e => {
    e.addEventListener('click', () => {
        calculator.appendOperator(e.textContent);
    });
});

seperatorButton.addEventListener('click', () => {
    calculator.seperate();
});

resultButton.addEventListener('click', () => {
    calculator.calculate();
});

clearButton.addEventListener('click', () => {
    calculator.clear();
});

removeButton.addEventListener('click', () => {
    calculator.remove();
});