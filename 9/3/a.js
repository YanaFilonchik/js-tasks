//  3. Найдитепроизведениеэлементовмассива[2,3,4, 5].
//  Методы: Используйтециклыfor, while, for...of.
//  Входные: [2, 3, 4, 5] → Результат: 120

const arr=[2,3,4, 5];
let res = 1;
for(let i=0; i<arr.length;i++){
    res*=arr[i];
}
console.log(res);

res = 1;
let i =0;
while (i<arr.length) {
    res*=arr[i];
    i++;
}
console.log(res);

res=1;
for (const el of arr) {
    res*=el;
}
console.log(res);