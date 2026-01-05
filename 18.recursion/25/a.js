// Рекурсивная функция выводит сумму элементы заранее заданного массива

const arr = [5, 10, 15, 20, 25];

function sumArr(arr){
    if(!arr.length) return 0;
    return arr[0] + sumArr(arr.slice(1));
}

const res = sumArr(arr);
console.log(res);