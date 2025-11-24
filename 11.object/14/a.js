//  14. *На входе массив чисел. Необходимо найти элемент, который повторяется наибольшее
//  количество раз. Если таких элементов несколько,можновернутьлюбойизних.
//  Входные: [1, 2, 3, 1, 2, 1] → Результат: 1
//  Входные: [5, 5, 6, 6, 6, 7] → Результат: 6

const arr = [1, 2, 3, 1, 2, 1];
const obj = {};
for (const el of arr) {
    if (obj[el]) {
        obj[el] += 1;
    } else {
        obj[el] = 1;
    }
}
console.log(obj);

let max = 0;
let maxKey = ``;
for (const key in obj) {
    if (max < +obj[key]) {
        max = +obj[key];
        maxKey = key;
    }
}
console.log(maxKey);