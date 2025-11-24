// 6. Есть массив массивов строк. Найти строку с максимальным количеством гласных (a, e, i, o, u).
// arr = [
//   ["cat", "banana"],
//   ["orange", "kiwi"]
// ]
// Результат: “banana” (3 гласные)

const arr = [
    ["cat", "banana"],
    ["orange", "kiwi"]
];

let sum = 0;
let res = 0;
for (const el of arr) {

    for (let i = 0; i < el.length; i++) {
        sum = 0;
        for (let j = 0; j < el[i].length; j++) {
            if (!`aeiou`.includes(el[i][j])) continue;
            sum++;
        }
        if (res < sum) {
            res = sum;
        }
    }
}
console.log(res);
