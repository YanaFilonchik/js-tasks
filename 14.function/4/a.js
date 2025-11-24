// 4. 
// 1-я функция: формирует массив чисел Math.random.
// 2-я функция: проверяет, что каждое число массива целое и кратно 3.
// 3-я функция: считает сумму всех чисел. Использовать: while.

function newRandomArr() {
    const arr = [];
    // const n = +prompt();
    const n = 3;
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    console.log(arr);
    return arr;
}

function isValid(arr) {
    return arr.every((el) => Number.isInteger(el) && el % 3 == 0 ? true : false)
}

function isValidInteger(arr) {
    return arr.every((el) => Number.isInteger(el) ? true : false)
}

const sumArr = (arr) => {
    let i = 0;
    let res = 0;
    while (i < arr.length) {
        res += arr[i];
        i++;
    }
    return res;
}

const arr = newRandomArr();
if (!isValid(arr)) console.log(`Не все числа целые и кратны 3`);
else if (isValidInteger(arr)) console.log(sumArr(arr));
else console.log(`error`);