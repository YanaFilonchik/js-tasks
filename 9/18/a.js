// 1. Найти максимальное число среди всех подмассивов.
// arr = [
//   [5, 1, 7],
//   [3, 9],
//   [0, 4, 8]
// ]
// Результат: 9

const arr = [
    [5, 1, 7],
    [3, 9],
    [0, 4, 8]
];

let res = +arr[0][0];

for (const el of arr) {
    for (let i = 0; i < el.length; i++) {
        if (res<el[i]){
            res = el[i];
        }
    }
}
console.log(res);