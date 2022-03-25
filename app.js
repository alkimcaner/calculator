const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
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
        console.log(/[0-9]/.test(this.calculation.slice(-1)));

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

resultButton.addEventListener('click', () => {
    calculator.calculate();
});

clearButton.addEventListener('click', () => {
    calculator.clear();
});

removeButton.addEventListener('click', () => {
    calculator.remove();
});