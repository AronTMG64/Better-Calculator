// Digits


const clear = document.getElementById('clear');
const backSpace = document.getElementById('backspace');
const divide = document.getElementById('divide');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const multiply = document.getElementById('multiply');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const minus = document.getElementById('minus');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const plus = document.getElementById('plus');
const zero = document.getElementById('zero');
const decimal = document.getElementById('decimal');
const equals = document.getElementById('equals');

// Output

const input = document.getElementById('input')
const answer = document.getElementById('answer')

// Values

let firstInputValue = ''
let secondInputValue = ''
let calculationMethod = ''
let answerValue = 0
let backgroundColors = false

// Functions

function clearFunction() {
    input.innerText = '';
    answer.innerText = '';
    calculationMethod = '';
    firstInputValue = '';
    secondInputValue = '';
    answerValue = '';
}

function backSpaceFunction() {
    if (secondInputValue != '') {
        secondInputValue = secondInputValue.substring(0, secondInputValue.length - 1);
        input.innerText = firstInputValue + calculationMethod + secondInputValue;
    } else if (secondInputValue == '') {
        calculationMethod = '';
        input.innerText = firstInputValue + calculationMethod + secondInputValue;
    }
    if (secondInputValue == '' && calculationMethod == '') {
        firstInputValue = firstInputValue.substring(0, firstInputValue.length - 1)
        input.innerText = firstInputValue + calculationMethod + secondInputValue;
    }
}

function divideFunction() {
    if (firstInputValue != '') {
        if (firstInputValue.includes('.', firstInputValue.length - 1) == true) {
            firstInputValue = firstInputValue.substring(0, firstInputValue.length - 1)
        }

        if (secondInputValue != '') {
            firstInputValue = (parseFloat(firstInputValue) / parseFloat(secondInputValue)).toString();
            secondInputValue = '';
            calculationMethod = '÷'
            input.innerText = firstInputValue + calculationMethod + secondInputValue;
        } else {
            calculationMethod = '÷'
            input.innerText = firstInputValue + calculationMethod + secondInputValue;
        }
    }
}

function sevenFunction() {
    if (answerValue != '') {
        clearFunction()
    }

    if (calculationMethod == '') {
        firstInputValue += 7
        input.innerText = firstInputValue + secondInputValue;
    } else {
        secondInputValue += 7
        input.innerText = firstInputValue + calculationMethod + secondInputValue;
    }
}

function eightFunction() {
    if (answerValue != '') {
        clearFunction()
    }

    if (calculationMethod == '') {
        firstInputValue += 8
        input.innerText = firstInputValue + secondInputValue;
    } else {
        secondInputValue += 8
        input.innerText = firstInputValue + calculationMethod + secondInputValue;
    }
}

function nineFunction() {
    if (answerValue != '') {
        clearFunction()
    }

    if (calculationMethod == '') {
        firstInputValue += 9
        input.innerText = firstInputValue + secondInputValue;
    } else {
        secondInputValue += 9
        input.innerText = firstInputValue + calculationMethod + secondInputValue;
    }
}

function multiplyFunction() {
    if (firstInputValue != '') {
        if (firstInputValue.includes('.', firstInputValue.length - 1) == true) {
            firstInputValue = firstInputValue.substring(0, firstInputValue.length - 1)
        }

        if (secondInputValue != '') {
            firstInputValue = (parseFloat(firstInputValue) * parseFloat(secondInputValue)).toString();
            secondInputValue = '';
            calculationMethod = 'x'
            input.innerText = firstInputValue + calculationMethod + secondInputValue;
        } else {
            calculationMethod = 'x'
            input.innerText = firstInputValue + calculationMethod + secondInputValue;
        }
    }
}

function fourFunction() {
    if (answerValue != '') {
        clearFunction()
    }

    if (calculationMethod == '') {
        firstInputValue += 4
        input.innerText = firstInputValue + secondInputValue;
    } else {
        secondInputValue += 4
        input.innerText = firstInputValue + calculationMethod + secondInputValue;
    }
}

function fiveFunction() {
    if (answerValue != '') {
        clearFunction()
    }

    if (calculationMethod == '') {
        firstInputValue += 5
        input.innerText = firstInputValue + secondInputValue;
    } else {
        secondInputValue += 5
        input.innerText = firstInputValue + calculationMethod + secondInputValue;
    }
}

function sixFunction() {
    if (answerValue != '') {
        clearFunction()
    }

    if (calculationMethod == '') {
        firstInputValue += 6
        input.innerText = firstInputValue + secondInputValue;
    } else {
        secondInputValue += 6
        input.innerText = firstInputValue + calculationMethod + secondInputValue;
    }
}

function minusFunction() {
    if (firstInputValue != '') {
        if (firstInputValue.includes('.', firstInputValue.length - 1) == true) {
            firstInputValue = firstInputValue.substring(0, firstInputValue.length - 1)
        }

        if (secondInputValue != '') {
            firstInputValue = (parseFloat(firstInputValue) - parseFloat(secondInputValue)).toString();
            secondInputValue = '';
            calculationMethod = '-'
            input.innerText = firstInputValue + calculationMethod + secondInputValue;
        } else {
            calculationMethod = '-'
            input.innerText = firstInputValue + calculationMethod + secondInputValue;
        }
    }
}

function oneFunction() {
    if (answerValue != '') {
        clearFunction()
    }

    if (calculationMethod == '') {
        firstInputValue += 1
        input.innerText = firstInputValue + secondInputValue;
    } else {
        secondInputValue += 1
        input.innerText = firstInputValue + calculationMethod + secondInputValue;
    }
}

function twoFunction() {
    if (answerValue != '') {
        clearFunction()
    }

    if (calculationMethod == '') {
        firstInputValue += 2
        input.innerText = firstInputValue + secondInputValue;
    } else {
        secondInputValue += 2
        input.innerText = firstInputValue + calculationMethod + secondInputValue;
    }
}

function threeFunction() {
    if (answerValue != '') {
        clearFunction()
    }

    if (calculationMethod == '') {
        firstInputValue += 3
        input.innerText = firstInputValue + secondInputValue;
    } else {
        secondInputValue += 3
        input.innerText = firstInputValue + calculationMethod + secondInputValue;
    }
}

function plusFunction() {
    if (firstInputValue != '') {
        if (firstInputValue.includes('.', firstInputValue.length - 1) == true) {
            firstInputValue = firstInputValue.substring(0, firstInputValue.length - 1)
        }

        if (secondInputValue != '') {
            firstInputValue = (parseFloat(firstInputValue) + parseFloat(secondInputValue)).toString();
            secondInputValue = '';
            calculationMethod = '+'
            input.innerText = firstInputValue + calculationMethod + secondInputValue;
        } else {
            calculationMethod = '+'
            input.innerText = firstInputValue + calculationMethod + secondInputValue;
        }
    }
}

function zeroFunction() {
    if (calculationMethod == '') {
        if (firstInputValue != '') firstInputValue += 0;
        input.innerText = firstInputValue + secondInputValue;
    } else {
        if (secondInputValue != '') secondInputValue += 0;
        input.innerText = firstInputValue + calculationMethod + secondInputValue;
    }
}

function decimalFunction() {
    if (answerValue != '') {
        clearFunction()
    }

    if (calculationMethod == '') {
        if (firstInputValue == '') firstInputValue += '0.'
        if (firstInputValue.includes('.') == false) firstInputValue += '.';
        input.innerText = firstInputValue + secondInputValue;
    } else {
        if (secondInputValue == '') secondInputValue += '0.'
        if (secondInputValue.includes('.') == false) secondInputValue += '.';
        input.innerText = firstInputValue + calculationMethod + secondInputValue;
    }
}

function equalsFunction() {
    if (calculationMethod == '+') {
        answerValue = parseFloat(firstInputValue) + parseFloat(secondInputValue);
        answer.innerText = answerValue
    }

    if (calculationMethod == '-') {
        answerValue = parseFloat(firstInputValue) - parseFloat(secondInputValue);
        answer.innerText = answerValue
    }

    if (calculationMethod == 'x') {
        answerValue = parseFloat(firstInputValue) * parseFloat(secondInputValue);
        answer.innerText = answerValue
    }

    if (calculationMethod == '÷') {
        answerValue = parseFloat(firstInputValue) / parseFloat(secondInputValue);
        answer.innerText = answerValue
    }
}

// AddEventListeners

clear.addEventListener('click', function () {
    clearFunction()
})

backSpace.addEventListener('click', function () {
    backSpaceFunction()
})

divide.addEventListener('click', function () {
    divideFunction()
})

seven.addEventListener('click', function () {
    sevenFunction()
})

eight.addEventListener('click', function () {
    eightFunction()
})

nine.addEventListener('click', function () {
    nineFunction()
})

multiply.addEventListener('click', function () {
    multiplyFunction()
})

four.addEventListener('click', function () {
    fourFunction()
})

five.addEventListener('click', function () {
    fiveFunction()
})

six.addEventListener('click', function () {
    sixFunction()
})

minus.addEventListener('click', function () {
    minusFunction()
})

one.addEventListener('click', function () {
    oneFunction()
})

two.addEventListener('click', function () {
    twoFunction()
})

three.addEventListener('click', function () {
    threeFunction()
})

plus.addEventListener('click', function () {
    plusFunction()
})

zero.addEventListener('click', function () {
    zeroFunction()
})

decimal.addEventListener('click', function () {
    decimalFunction()
})

equals.addEventListener('click', function () {
    equalsFunction()
})

window.addEventListener('keyup', (e) => {

    if (e.key === 'Delete') clear.style.backgroundColor = null;

    if (e.key === 'Backspace') backSpace.style.backgroundColor = null;

    if (e.key === '/') divide.style.backgroundColor = null;

    if (e.key === '7') seven.style.backgroundColor = null;

    if (e.key === '8') eight.style.backgroundColor = null;

    if (e.key === '9') nine.style.backgroundColor = null;

    if (e.key === '*') multiply.style.backgroundColor = null;

    if (e.key === '4') four.style.backgroundColor = null;

    if (e.key === '5') five.style.backgroundColor = null;

    if (e.key === '6') six.style.backgroundColor = null;

    if (e.key === '-') minus.style.backgroundColor = null;

    if (e.key === '1') one.style.backgroundColor = null;

    if (e.key === '2') two.style.backgroundColor = null;

    if (e.key === '3') three.style.backgroundColor = null;

    if (e.key === '+') plus.style.backgroundColor = null;

    if (e.key === '0') zero.style.backgroundColor = null;

    if (e.key === ',') decimal.style.backgroundColor = null;

    if (e.key === 'Enter') equals.style.backgroundColor = null;
})

window.addEventListener('keydown', (e) => {
    if (e.key === 'Delete') {
        clear.style.backgroundColor = '#c2c2c280';
        clearFunction()
    }

    if (e.key === 'Backspace') {
        backSpace.style.backgroundColor = '#c2c2c280';
        backSpaceFunction()
    }

    if (e.key === '/') {
        divide.style.backgroundColor = '#c2c2c280';
        divideFunction()
    }

    if (e.key === '7') {
        seven.style.backgroundColor = '#c2c2c280';
        sevenFunction()
    }

    if (e.key === '8') {
        eight.style.backgroundColor = '#c2c2c280';
        eightFunction()
    }

    if (e.key === '9') {
        nine.style.backgroundColor = '#c2c2c280';
        nineFunction()
    }

    if (e.key === '*') {
        multiply.style.backgroundColor = '#c2c2c280';
        multiplyFunction()
    }

    if (e.key === '4') {
        four.style.backgroundColor = '#c2c2c280';
        fourFunction()
    }

    if (e.key === '5') {
        five.style.backgroundColor = '#c2c2c280';
        fiveFunction()
    }

    if (e.key === '6') {
        six.style.backgroundColor = '#c2c2c280';
        sixFunction()
    }

    if (e.key === '-') {
        minus.style.backgroundColor = '#c2c2c280';
        minusFunction()
    }

    if (e.key === '1') {
        one.style.backgroundColor = '#c2c2c280';
        oneFunction()
    }

    if (e.key === '2') {
        two.style.backgroundColor = '#c2c2c280';
        twoFunction()
    }

    if (e.key === '3') {
        three.style.backgroundColor = '#c2c2c280';
        threeFunction()
    }

    if (e.key === '+') {
        plus.style.backgroundColor = '#c2c2c280';
        plusFunction()
    }

    if (e.key === '0') {
        zero.style.backgroundColor = '#c2c2c280';
        zeroFunction()
    }

    if (e.key === ',') {
        decimal.style.backgroundColor = '#c2c2c280';
        decimalFunction()
    }

    if (e.key === 'Enter') {
        equals.style.backgroundColor = '#c2c2c280';
        equalsFunction()
    }
})