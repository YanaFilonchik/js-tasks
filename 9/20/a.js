// 3. В массиве массивов с числами заменить все отрицательные числа на 0.
// arr = [
//   [-1, 2],
//   [3, -4],
//   [-5, 6]
// ]
// Результат: [[0, 2], [3, 0], [0, 6]]

const arr = [
    [-1, 2],
    [3, -4],
    [-5, 6]
];


for (const el of arr) {
    for (let i = 0; i < el.length; i++) {
        if (el[i] < 0) {
            el[i] = 0;
        }
    }
}

let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}