var OTO = OTO || {};

OTO.Calculator = class {
    constructor(container, options) {
        this.container = container;
        this.options = options;
        this.calculatorForm = this.container.getElementsByClassName('exercise-form');
        this.calculatorInput = this.container.getElementsByClassName('input-number');
        this.calculatorSubmit = this.container.getElementsByClassName('exercise-form-submit');
    }

    getNumberValue() {
        return this.calculatorInput[0].valueAsNumber;
    }

    inverseDigits() {
        let n = this.getNumberValue();

        let digits = 0;
        let result = 0;

        while (n > 0) {
            if (digits === 0) {
                result = n % 10;
            } else {
                result = result + '' + n % 10;
            }
            n = Math.floor(n / 10);
            digits++;
        }

        return result;
    }

    sumDigits() {
        let n = this.getNumberValue();

        let digits = 0;
        let result = 0;

        while (n > 0) {
            result = result + n % 10;
            n = Math.floor(n / 10);
            digits++;
        }

        return result;
    }

    firstDigit() {
        let n = this.getNumberValue();

        let digits = 0;
        let result = 0;

        while (n > 0) {
            result = n;
            n = Math.floor(n / 10);
            digits++;
        }

        return result;
    }

    outputData() {
        const dataInversedDigits = this.inverseDigits();
        const dataSumDigits = this.sumDigits();
        const dataFirstDigit = this.firstDigit();

        const dataInversedBlock = document.getElementById('inversed-digits');
        const dataInversedPlace = dataInversedBlock.querySelectorAll('.exercise-result');

        const dataSumBlock = document.getElementById('sum-digits');
        const dataSumPlace = dataSumBlock.querySelectorAll('.exercise-result');

        const dataFirstBlock = document.getElementById('first-digit');
        const dataFirstPlace = dataFirstBlock.querySelectorAll('.exercise-result');

        dataInversedPlace[0].title = dataInversedDigits;
        dataInversedPlace[0].innerHTML = '<span>' + dataInversedDigits + '</span>';

        dataSumPlace[0].title = dataSumDigits;
        dataSumPlace[0].innerHTML = '<span>' + dataSumDigits + '</span>';

        dataFirstPlace[0].title = dataFirstDigit;
        dataFirstPlace[0].innerHTML = '<span>' + dataFirstDigit + '</span>';
    }

    checkInputValidation() {
        if (Number.isNaN(this.getNumberValue()) || typeof this.getNumberValue() !== 'number' || typeof this.getNumberValue() === '' || this.getNumberValue() % 1 !== 0) {
            alert('Te rugăm să introduci un număr întreg valid.');
        } else {
            this.outputData();
        }
    }

    loadAlgorithms() {
        this.checkInputValidation();
    }

    initCalculatorForm() {
        const calculatorSubmit = this.calculatorSubmit[0];

        this.calculatorInput[0].addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                calculatorSubmit.click();
            }
        });

        calculatorSubmit.addEventListener('click', this.loadAlgorithms.bind(this), false);
    }

    init() {
        this.initCalculatorForm();
    };
}