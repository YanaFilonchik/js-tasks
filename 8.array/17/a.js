// Посчитать сумму элементов "Через один"
// [1,2,3,4,5] → 1 + 3 + 5 = 9
const arr = [1, 2, 3, 4, 5];
let res = 0;
for (let i = 0; i < arr.length; i += 2) {
    res += +arr[i];
}
console.log(res);