// 3 задача:
// 1-я функция: формирует массив строк.
// 2-я функция: проверяет, начинается ли строка с заглавной буквы.
// 3-я функция: считает строки, длина которых > 5.


function newArr() {
    const arr = [];
    const n = +prompt();
    for (let i = 0; i < n; i++) {
        arr.push(resElem);
    }
    return arr;
}

function isValidStrUpper(arr) {
    return arr[0] === arr[0].toUpperCase() ? true : false;
}

const sumArr = (arr) => arr.reduce((mid, el) => {
    isValidStrUpper(el) && el.length > 5 ? mid += 1 : false;
}, 0)

