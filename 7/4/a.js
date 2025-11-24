//  4. Найди сумму всех чётных чисел от 1 до N. 
// Ввод: N = 6 → Вывод: 12

const n = 6;
let sum = 0;
for (let i = 0; i <= n; i++) {
    i % 2 == 0 ? sum += i : null;
}
console.log(sum);
