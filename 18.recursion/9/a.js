//  9. Реализуйтепоиск максимального числа статичного массива используя рекурсию
//  Входные: [1, 2, 3, 4] → Результат: 4
//  Входные: [10, 5, 8] → Результат: 10


const arr = [10, 2, 3, 4];
let max = arr[0];

function maxElem(arr) {
    if (!arr.length) return;
    max > arr[0] ? max : max = arr[0];
    maxElem(arr.slice(1));
}

maxElem(arr);
console.log(max);