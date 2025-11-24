// 1.
// 1-я функция: формирует массив чисел.
// 2-я функция: проверяет, является ли число внутри массива > 10 и возвращает массив из четных чисел

function newArr() {
    const arr = [];
    const n = +prompt();
    let resElem = 0;
    for (let i = 0; i < n; i++) {
        do {
            resElem = +prompt();
            debugger
        } while (!isNaN(resElem)? false : true)
        arr.push(resElem);
    }
    return arr;
}

const cetArr = (arr) => arr.filter((el) => el > 10 && el % 2 == 0 ? true : false);

const arrNumber = newArr();
console.log(cetArr(arrNumber));