// Рекурсивная функция выводит элементы заранее заданного массива в console.log, например:
// [5, 10, 15, 20, 25].

const arr = [5, 10, 15, 20, 25];

function consoleArr(arr) {
    if (!arr.length) return;
    console.log(arr[0]);
    consoleArr(arr.slice(1));
}

consoleArr(arr);