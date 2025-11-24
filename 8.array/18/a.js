// Удалить каждый трехзначный элемент массива 
// [101,20,303,430,50,60] → [20,50,60]

const arr = [101, 20, 303, 430, 50, 60];
const res = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] / 100 >= 1) continue;
    res.push(arr[i]);
}
console.log(res);