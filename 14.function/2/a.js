// 2.
// 1-я функция: формирует массив строк.
// 2-я функция: проверяет, содержит ли строка только буквенные значения.
// 3-я функция: считает количество строк с буквенными значениями. Использовать: reduce

function newArr() {
    const arr = [];
    const n = +prompt();
    for (let i = 0; i < n; i++) {
        arr.push(prompt());
    }
    return arr;
}

function isValidStr(str) { return isNaN(str) ? true : false };

const sumStr = (array) => array.reduce((mid, el) => {
    return isValidStr(el) ? mid += 1 : mid += 0;
}, 0)

const array = newArr();
const res = sumStr(array);
console.log(res);
