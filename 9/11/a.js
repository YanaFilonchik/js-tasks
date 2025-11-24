//  11.
//  Выведитекаждыйэлементмассива[1, 2, 2, 3, 4, 4, 3, 4, 5] без повторений.
//  Методы: Используйтециклыfor, for...of.
//  Входные: [1, 2, 2, 3, 4, 4, 3, 4, 5] → Результат: [1, 2, 3, 4, 5]

const arr = [1, 2, 2, 3, 4, 4, 3, 4, 5];
let res = [];
for (let i = 0; i < arr.length; i++) {
    if(res.includes(arr[i])) continue;
    res.push(arr[i]);
}
console.log(res);

res = [];
for (const el of arr) {
    if(res.includes(el)) continue;
    res.push(el);
}
console.log(res);
