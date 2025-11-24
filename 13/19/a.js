// 1 задача:
// 1-я функция: формирует динамический массив строк.
// 2-я функция: проверяет строки внутри массива (длина > 2).

function arr() {
    const arr = [];
    const n = +prompt();
    for (let i = 0; i < n; i++) {
        arr.push(prompt());
    }
    return arr;
}

const isValidStr = (arr) => arr.every((el) => el.length > 2 ? true : false)

const arrStr = arr();
const res = isValidStr(arrStr);
console.log(res);