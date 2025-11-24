// 7. Найди сумму квадратов чисел от 1 до N.
//  Ввод: N = 3 → Вывод: 14

const n = 3;
let res = 0;
for (let i = 0; i <= 3; i++){
    res += Math.pow(i,2);
}
console.log(res);