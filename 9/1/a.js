// 1.
//  Выведитечислаот1до50.
//  Методы: Используйтециклыfor, while.
//  Входные:- →Результат: [1, 2, 3, ..., 50]
const arr = [];
for (let i = 1; i <= 50; i++) { 
    arr.push(i);
}
console.log(arr);

const arr1 = [];
let i = 1;
while (i<=50) {
    arr1.push(i);
    i++;
}
console.log(arr1);