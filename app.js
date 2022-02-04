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

clear.addEventListener('click', function () {
    clearFunction()
})

backSpace.addEventListener('click', function () {
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
})

divide.addEventListener('click', function () {
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
})

nine.addEventListener('click', function () {
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
})

eight.addEventListener('click', function () {
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
})

seven.addEventListener('click', function () {
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
})

multiply.addEventListener('click', function () {
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
})

six.addEventListener('click', function () {
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
})

five.addEventListener('click', function () {
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
})

four.addEventListener('click', function () {
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
})

minus.addEventListener('click', function () {
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
})

three.addEventListener('click', function () {
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
})

two.addEventListener('click', function () {
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
})

one.addEventListener('click', function () {
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
})

plus.addEventListener('click', function () {
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
})

zero.addEventListener('click', function () {
    if (calculationMethod == '') {
        if (firstInputValue != '') firstInputValue += 0;
        input.innerText = firstInputValue + secondInputValue;
    } else {
        if (secondInputValue != '') secondInputValue += 0;
        input.innerText = firstInputValue + calculationMethod + secondInputValue;
    }
})

decimal.addEventListener('click', function () {
    if (calculationMethod == '') {
        if (firstInputValue == '') firstInputValue += '0.'
        if (firstInputValue.includes('.') == false) firstInputValue += '.';
        input.innerText = firstInputValue + secondInputValue;
    } else {
        if (secondInputValue == '') secondInputValue += '0.'
        if (secondInputValue.includes('.') == false) secondInputValue += '.';
        input.innerText = firstInputValue + calculationMethod + secondInputValue;
    }
})

equals.addEventListener('click', function () {
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
})