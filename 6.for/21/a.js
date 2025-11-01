//  21. Дан массив оценок (чисел от 1 до 5) [5, 4, 3, 5, 2, 4, 1, 3, 5, 2, 4]. Необходимо подсчитать, сколько раз 5
//  встречается в массиве. Используйте цикл for для итерации по массиву и оператор switch для
//  подсчета количества каждой оценки.

const arr = [5, 4, 3, 5, 2, 4, 1, 3, 5, 2, 4];
let res1 = 0;
let res2 = 0;
let res3 = 0;
let res4 = 0;
let res5 = 0;

for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
        case 1:
            res1++;
            break;
        case 2:
            res2++;
            break;
        case 3:
            res3++;
            break;
        case 4:
            res4++;
            break;
        case 5:
            res5++;
            break;
    }
}
console.log(`1 - встречается: ${res1}`);
console.log(`2 - встречается: ${res2}`);
console.log(`3 - встречается: ${res3}`);
console.log(`4 - встречается: ${res4}`);
console.log(`5 - встречается: ${res5}`);

