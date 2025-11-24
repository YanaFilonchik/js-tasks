// 4. Создать новый массив, где каждый подмассив будет перевёрнут.
// arr = [
//   [1, 2, 3],
//   ["a", "b", "c"]
// ]
// Результат: [[3, 2, 1], [“c”, “b”, “a”]]

const arr = [
    [1, 2, 3],
    ["a", "b", "c"]
];
const res = [];

do {
    res.push(arr[0].reverse());
    arr.shift();
} while (arr.length);

for (let i = 0; i < res.length; i++) {
    console.log(res[i]);
}