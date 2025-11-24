// 11.
//  Сформируйте массив из 10 значений prompt. Создайте строку из элементов массива, разделённых
//  дефисами.
//  Входные: [1, 2, 3, 4, 5, 6, 7, 8, 9] → Результат: '-1-2-3-4-5-6-7-8-9-'

const arr = [];
const arr1 = [`-`];
for (let i = 0; i < 10; i++) {
    arr.push(prompt());
}

for (let i = 0; i < arr.length; i++) {
    arr1.push(arr[i],`-`);
}
console.log(arr1.join(``));

//    console.log(arr.join(`-`));