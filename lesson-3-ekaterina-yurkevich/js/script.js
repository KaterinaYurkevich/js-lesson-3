// 1)
function getMax(a, b) {
    return (a > b) ? a : b;
};

let firstNumber = +prompt('Введите первое число:');
let secondNumber = +prompt('Введите второе число:');

let result = getMax(firstNumber, secondNumber);
console.log(`Большее из чисел ${firstNumber} и ${secondNumber}: `, result);

// 2)
function getPow(x, n) {
    let pow = 1;
    for (let i = 1; i <= n; i++) {
        pow = pow * x;
    }
    return pow;
};

function checkNumberN(n) {
    return (n > 0 && n % 1 === 0) ? true : false;
};

let userNumber = +prompt('Введите число');
let userPow = +prompt('Введите степень числа');

if (checkNumberN(userPow)) {
    let resultPow = getPow(userNumber, userPow);
    console.log(`Число ${userNumber} в степени ${userPow} равно: `, resultPow);
} else console.log('Вы ввели некорректную степень числа, это должно быть натуральное число');

// 3)

function gethowManyDays(month) {
    let days;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            days = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            break;
        case 2:
            days = 28;
            break;

    }
    return days;
}

let numberOfMonth = +prompt('Введите номер месяца');
let daysInMonth = gethowManyDays(numberOfMonth);
console.log(`Количество дней в месяце под номером ${numberOfMonth}: `, daysInMonth);

// 4)

function calcmultiply(a, b, even, odd) {
    let multiply = a * b;
    return (multiply % 2 === 0) ? even() : odd();
};

function showEven() {
    console.log('Произведение чисел четное');
};

function showOdd() {
    console.log('Произведение чисел нечетное');
};

let firstUserNumber = prompt('Введите первое число');
let secondUserNumber = prompt('Введите второе число');

if (firstUserNumber === '' || firstUserNumber === null) {
    console.log('Вы не ввели первое число');
} else if (secondUserNumber === '' || secondUserNumber === null) {
    console.log('Вы не ввели второе число');
} else if (+firstUserNumber === 0 || +secondUserNumber === 0) {
    console.log('Произведение любого числа на 0 даст 0');
} else {
    let resultMultiply = +firstUserNumber * +secondUserNumber;
    console.log(`Произведение чисел ${firstUserNumber} и ${secondUserNumber} равно: `, resultMultiply);
    calcmultiply(+firstUserNumber, +secondUserNumber, showEven, showOdd);
};

// 5)

function checkNumber(n) {
    return ((n < 1) || (n > 18) || (n === 0) || (isNaN(n))) ? false : true;
};

function isEven(n) {
    return (n % 2 === 0) ? true : false;
};

let userNum = +prompt('Введите число от 1 до 18');

if (!checkNumber(userNum)) {
    console.log('Вы ввели неправильное число');
} else {
    for (let i = 1; i <= userNum; i++) {
        if (isEven(i)) {
            console.log(i);
        }
    }
};