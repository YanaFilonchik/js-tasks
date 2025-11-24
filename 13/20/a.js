// 2 задача:
// 1-я функция: формирует массив чисел.
// 2-я функция: проверяет число (на !isNaN, не отрицательное).
// 3-я функция: циклом while ищет минимальное число.

function newArr() {
    const arr = [];
    const n = +prompt();
    let resElem = 0;
    for (let i = 0; i < n; i++) {
        do{
            resElem = +prompt();
        }while(!isValid(resElem))
        arr.push(resElem);
    }
    return arr;
}

const isValid = (elem) => !isNaN(elem) && elem > 0 ? true : false;

const minNum = (arr) => {
    let res = arr[0];
    let i = 1;
    while (i < arr.length) {
        if (res > i) res = arr[i];
        i++;
    }
    return res;
}

const arr = newArr();
console.log(minNum(arr));