const clear = document.getElementById('clear');
const backSpace = document.getElementById('backspace');
const divide = document.getElementById('divide');
const nine = document.getElementById('nine');
const eight = document.getElementById('eight');
const seven = document.getElementById('seven');
const multiply = document.getElementById('multiply');
const six = document.getElementById('six');
const five = document.getElementById('five');
const four = document.getElementById('four');
const minus = document.getElementById('minus');
const three = document.getElementById('three');
const two = document.getElementById('two');
const one = document.getElementById('one');
const plus = document.getElementById('plus');
const zero = document.getElementById('zero');
const decimal = document.getElementById('decimal');
const equals = document.getElementById('equals');

const input = document.getElementById('input')
const answer = document.getElementById('answer')

let firstInputValue = ''
let secondInputValue = ''
let calculationMethod = ''

let answerValue = 0

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
            firstInputValue = parseFloat(firstInputValue) / parseFloat(secondInputValue);
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
            firstInputValue = parseFloat(firstInputValue) * parseFloat(secondInputValue);
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
            firstInputValue = parseFloat(firstInputValue) - parseFloat(secondInputValue);
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
            firstInputValue = parseFloat(firstInputValue) + parseFloat(secondInputValue);
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

window.addEventListener('keydown', (e) => {
    if (e.key === 'Delete') clearFunction()

    if (e.key === 'Backspace') backSpaceFunction()

    if (e.key === '/') divideFunction()

    if (e.key === '7') sevenFunction()

    if (e.key === '8') eightFunction()

    if (e.key === '9') nineFunction()

    if (e.key === '*') multiplyFunction()

    if (e.key === '4') fourFunction()

    if (e.key === '5') fiveFunction()

    if (e.key === '6') sixFunction()

    if (e.key === '-') minusFunction()

    if (e.key === '1') oneFunction()

    if (e.key === '2') twoFunction()

    if (e.key === '3') threeFunction()

    if (e.key === '+') plusFunction()

    if (e.key === '0') zeroFunction()

    if (e.key === ',') decimalFunction()

    if (e.key === 'Enter') equalsFunction()
})