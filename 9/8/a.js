//  8. Создайте новый массив, заполненный только числами из исходного массива смешанных
//  элементов.
//  Методы: Используйтециклfor.
//  Входные: ["apple", 3, "orange", 2] → Результат: [3, 2]

const arr = ["apple", 3, "orange", 2];
const res = [];
for (let i = 0; i < arr.length; i++) {
    if(isNaN(arr[i])) continue;
    res.push(arr[i]);
}
console.log(res);