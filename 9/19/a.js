// 2. Для каждого подмассива посчитать среднее арифметическое.
// arr = [
//   [2, 4, 6],
//   [1, 3, 5, 7],
//   [10]
// ]
// Результат: [4, 4, 10]

const arr = [
    [2, 4, 6],
    [1, 3, 5, 7],
    [10]
]

const res = [];
let sum = 0;
let n = 0;
while (n < arr.length) {
    sum = 0;
    for (let i = 0; i < arr[n].length; i++) {
        sum += +arr[n][i];
    }
    res.push(sum/arr[n].length);
    n++;
}
console.log(res);